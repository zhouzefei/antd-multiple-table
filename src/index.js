import React, { useEffect, useRef, useState, Suspense } from "react";
import "./index.less";

const ResizeTable = React.lazy(()=>import("./ResizeTable"));
const DragTable = React.lazy(()=>import("./DragTable"));
const MultiTable = React.lazy(()=>import("./MultiTable"));

export default (props) => {
	const { children, colMinWidth=70, stretchabel=true, cacheNameSpace, draggable, dragCallBack } = props;
    const { scroll, columns:columnsProps, ...tableProps } = children.props || {};

    const { x } = scroll || {};
    const [scrollX, setScrollX] = useState(x); // 长度调整
    const [columns, setColumns] = useState(columnsProps); // 列

	const tableEl = useRef(null);

    // 监听列变化初始化
    useEffect(()=>{
        if(stretchabel && columnsProps && columnsProps.length){
            initTable();
        }
    },[columnsProps]);


	// 表格初始化
	const initTable = () => {
        let nextColumns = [...columnsProps];
        let storageWidthValue = localStorage.getItem(cacheNameSpace);
        if(storageWidthValue){
            storageWidthValue = JSON.parse(storageWidthValue);
        }
        nextColumns = nextColumns.map((v,colI)=>{
            if(storageWidthValue && storageWidthValue[colI]){
                v.width = storageWidthValue[colI];
            }
            return v;
        });
        const scrollXTemp = storageWidthValue.scrollX;

        let tableDefaultWidth = tableEl && tableEl.current && tableEl.current.clientWidth;
        // 统计总长度 如果小于屏幕宽度则平均分配
		if(x < tableDefaultWidth){
            tableDefaultWidth = scrollXTemp || tableDefaultWidth; // 如果有缓存的scroll使用缓存的
			nextColumns = nextColumns.map(c=>{
				if(c.width){
					return {
						...c,
						width: c.width / x * tableDefaultWidth
					}
				}else{
					return c
				}
			});
		}else{
            tableDefaultWidth = scrollXTemp || x || tableDefaultWidth; // 如果有缓存的scroll使用缓存的
            // 针对没有设置段度的列进行宽度平均分配
            let [widCount,columnIArr] = [0,[]];
            nextColumns.forEach((column,i)=>{
                if(!column.width){
                    columnIArr.push(i);
                }else{
                    if(typeof column.width === "string"){
                        column.width =  column.width.replace("px",'')
                    }
                    widCount += Number(column.width)
                }
            });
            const restWid = tableDefaultWidth - widCount;
            const average = restWid / columnIArr.length; // 平均宽度

            columnIArr.length &&
            columnIArr.forEach((v,i)=>{
                nextColumns[v]={
                    ...nextColumns[v],
                    width:average
                }
            });
        };
        setScrollX(tableDefaultWidth);
		setColumns(nextColumns);
	};

    // 监听初始化
	useEffect(()=>{
		if(stretchabel && columns && columns.length>0){
			initLeftFixedTable();
			initRightFixedTable();
		}
    },[columns])

	// 左浮动表格初始化
	const initLeftFixedTable = () => {
		if(tableEl.current){
			if(tableEl.current.querySelector(".ant-table-fixed-left table")){
                const width = tableEl.current.querySelector(".ant-table-scroll .ant-table-fixed tr").firstElementChild.getBoundingClientRect().width;
				tableEl.current.querySelector(".ant-table-fixed-left table").style.width = width + "px";
			}
		}
	};
    // 右浮动表格初始化
	const initRightFixedTable = () => {
		if(tableEl.current){
			if(tableEl.current.querySelector(".ant-table-fixed-right table")){
                const width = tableEl.current.querySelector(".ant-table-scroll .ant-table-fixed tr").lastElementChild.getBoundingClientRect().width;
				tableEl.current.querySelector(".ant-table-fixed-right table").style.width = width + "px";
			}
		}
	};

	const handleResize = index => (e, { size }) => {
		const nextColumns = [...columns];
        const width = Math.max(size.width, colMinWidth);
        const scrollXTemp = Number(scrollX) + (width - nextColumns[index].width);
        // ------start缓存处理
        let storageWidthValue = localStorage.getItem(cacheNameSpace);
        if(storageWidthValue){
            storageWidthValue = JSON.parse(storageWidthValue);
        }else{
            storageWidthValue = {};
        }
        storageWidthValue = {
            ...storageWidthValue,
            [index]:width,
            scrollX: scrollXTemp
        }
        localStorage.setItem(cacheNameSpace,JSON.stringify(storageWidthValue));
        // ------end缓存处理

        setScrollX(scrollXTemp);
		nextColumns[index] = {
		  ...nextColumns[index],
		  width
		};
		setColumns(nextColumns);
	};

    // 拖拽回调
    const moveRow = (dragIndex, hoverIndex) => {
        dragCallBack && dragCallBack(dragIndex, hoverIndex)
    };

	return (
        <div ref={tableEl} className="tntd-multi-table">
            {
                React.Children.map(children, table => {
                    return (
                        <>
                            {
                                stretchabel &&
                                !draggable &&
                                <Suspense fallback={null}>
                                    <ResizeTable
                                        table={table}
                                        handleResize={handleResize}
                                        columns={columns}
                                        scroll={{
                                            ...scroll,
                                            x: scrollX
                                        }}
                                        {...tableProps}
                                    />
                                </Suspense>
                            }
                            {
                                !stretchabel &&
                                draggable &&
                                <Suspense fallback={null}>
                                    <DragTable
                                        table={table}
                                        columns={columns}
                                        moveRow={moveRow}
                                        scroll={{
                                            ...scroll,
                                            x: scrollX
                                        }}
                                        {...tableProps}
                                    />
                                </Suspense>
                            }

                            {
                                stretchabel &&
                                draggable &&
                                <Suspense fallback={null}>
                                    <MultiTable
                                        table={table}
                                        handleResize={handleResize}
                                        moveRow={moveRow}
                                        columns={columns}
                                        scroll={{
                                            ...scroll,
                                            x: scrollX
                                        }}
                                        {...tableProps}
                                    />
                                </Suspense>
                            }
                        </>
                    )
                })
            }
        </div>
	);
}

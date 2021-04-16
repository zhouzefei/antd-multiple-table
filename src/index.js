import React, { useEffect, useRef, useState, Suspense } from "react";
import "./index.less";

const ResizeTable = React.lazy(()=>import("./ResizeTable"));

export default (props) => {
	const { children, colMinWidth=70, cacheNameSpace } = props;
    const { scroll, columns:columnsProps, ...tableProps } = children.props || {};

    const { x } = scroll || {};
    const [scrollX, setScrollX] = useState(x); // 长度调整
    const [columns, setColumns] = useState(columnsProps); // 列

	const tableEl = useRef(null);

    // 监听列变化初始化
    useEffect(()=>{
        if(columnsProps && columnsProps.length){
            initTable();
        }
    },[columnsProps]);


	// 表格初始化
	const initTable = () => {
        let nextColumns = [...columnsProps];
        let scrollXTemp = 0;
        if(cacheNameSpace){
            let storageWidthValue = localStorage.getItem(cacheNameSpace);
            if(storageWidthValue){
                storageWidthValue = JSON.parse(storageWidthValue);
                nextColumns = nextColumns.map((v,colI)=>{
                    if(storageWidthValue && storageWidthValue[colI]){
                        v.width = storageWidthValue[colI];
                    }
                    return v;
                });
                scrollXTemp = storageWidthValue.scrollX;
            }
        }

        let tableDefaultWidth = tableEl && tableEl.current && tableEl.current.clientWidth;
        tableDefaultWidth = scrollXTemp || Math.max(x, tableDefaultWidth); // 如果有缓存的scroll使用缓存的
        console.log("tableDefaultWidth",tableDefaultWidth)
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

        setScrollX(tableDefaultWidth);
		setColumns(nextColumns);
	};

    // 监听初始化
	useEffect(()=>{
		if(columns && columns.length>0){
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
        if(cacheNameSpace){
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
        }
        // ------end缓存处理

        setScrollX(scrollXTemp);
		nextColumns[index] = {
		  ...nextColumns[index],
		  width
		};
		setColumns(nextColumns);
	};


	return (
        <div ref={tableEl} className="tntd-multi-table">
            {
                React.Children.map(children, table => {
                    return (
                        <Suspense fallback={null}>
                            <ResizeTable
                                table={table}
                                handleResize={handleResize}
                                columns={columns}
                                scroll={{
                                    x: scrollX
                                }}
                                {...tableProps}
                            />
                        </Suspense>
                    )
                })
            }
        </div>
	);
}

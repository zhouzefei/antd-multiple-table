import ReactDOM from "react-dom";
import ResizeTable from "../src";
import { Table } from "antd";
class ResizerDemo extends React.Component {
    state={
        dataSource: new Array(8).fill("测试编号").map((v,i)=>({
            "id":i,
            "no":v+i,
            "no1":v+i,
            "no2":v+i,
            "no3":v+i,
            "no4":v+v+v+v+v+v+i,
            "no5":v+i,
            "no6":v+i,
            "no7":v+i,
            "no8":v+i,
            "no9":v+i,
            "no10":v+i,
            "no11":v+i,
            "no12":v+i,
            "no13":v+i,
        }))
    }

    dragCallBack = (dragIndex, hoverIndex)=>{
        const { dataSource } = this.state;
        const newDataSource = [...dataSource];
        const dragRow = newDataSource[dragIndex];
        newDataSource.splice(dragIndex, 1);
        newDataSource.splice(hoverIndex, 0, dragRow);
        this.setState({
            dataSource: newDataSource
        });
    };

	render(){
        const { dataSource } = this.state;
		return (
			<div style={{"margin":"30px"}}>
                <ResizeTable
                    cacheNameSpace="test"
                >
                    <Table
                        columns={[{
                            "title":"编号1",
                            "dataIndex":"no",
                            // "fixed":"left"
                        },{
                            "title":"编号2",
                            "dataIndex":"no1",
                            "width":"400px"
                        },{
                            "title":"编号3",
                            "dataIndex":"no2",
                            "width":"200px"
                        },{
                            "title":"编号4",
                            "dataIndex":"no3",
                        },{
                            "title":"编号5",
                            "dataIndex":"no4",
                        },{
                            "title":"编号6",
                            "dataIndex":"no5",
                        },{
                            "title":"编号7",
                            "dataIndex":"no6",
                        },{
                            "title":"编号8",
                            "dataIndex":"no7",
                            "fixed":"right"
                        }]}
                        dataSource={dataSource}
                        pagination={false}
                        rowKey="id"
                        scroll={{
                            x: 1400
                        }}
                    />
                </ResizeTable>
            </div>
		)
	}
}

ReactDOM.render(<ResizerDemo />, document.getElementById("app"));

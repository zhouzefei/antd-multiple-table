### 组件介绍：基于antd的多功能表格
- 拉伸：支持fixed
- 拖拽

### 使用方法
`npm install @tntd/table-resizer --save`


### 参数
|  参数   | 作用  |
|  ----  |  ----  |
|  cacheNameSpace  | 将拉伸后的操作缓存在localstorage key为`${cacheNameSpace}`的对象中，列索引作为具体列的key|


```javascript
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
            },{
                "title":"编号3",
                "dataIndex":"no2",
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
            dataSource={
                new Array(8).fill("测试编号").map((v,i)=>({
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
            pagination={false}
            rowKey="id"
            scroll={{
                x: 1400
            }}
        />
    </ResizeTable>
```

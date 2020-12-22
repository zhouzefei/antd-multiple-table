import React from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ResizableTitle from "./ResizeTable/ResizableTitle";
import DragableBodyRow from "./DragTable/DragableBodyRow";

export default (props) => {
    const { table, moveRow, handleResize, columns, ...rest } = props;
	return (
        <DndProvider backend={HTML5Backend}>
            {
                React.cloneElement(table, {
                    ...rest,
                    components:{
                        header: {
                            cell: ResizableTitle,
                        },
                        body: {
                            row: DragableBodyRow,
                        }
                    },
                    columns: (columns && columns.length>0) ? columns.map((col, index) => ({
                        ...col,
                        onHeaderCell: column => ({
                            width: column.width,
                            onResize: handleResize(index),
                        })
                    })) : [],
                    onRow:(record, index) => ({
                        index,
                        moveRow: moveRow,
                    })
                })
            }
        </DndProvider>
	);
}

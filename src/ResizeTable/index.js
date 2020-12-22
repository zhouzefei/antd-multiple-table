import React from "react";
import ResizableTitle from "./ResizableTitle";

export default (props) => {
    const { handleResize, columns, scroll, table, ...rest } = props;
	return (
        React.cloneElement(table, {
            ...rest,
            components:{
                header: {
                    cell: ResizableTitle,
                }
            },
            scroll:scroll,
            columns: (columns && columns.length>0) ? columns.map((col, index) => ({
                ...col,
                onHeaderCell: column => ({
                    width: column.width,
                    onResize: handleResize(index),
                })
            })) : []
        })
	);
}

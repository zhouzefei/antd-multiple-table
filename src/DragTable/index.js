import React from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import DragableBodyRow from "./DragableBodyRow";

export default (props) => {
    const { moveRow, table, ...rest } = props;
	return (
        <DndProvider backend={HTML5Backend}>
            {
                React.cloneElement(table, {
                    ...rest,
                    components:{
                        body: {
                            row: DragableBodyRow,
                        }
                    },
                    onRow:(record, index) => ({
                        index,
                        moveRow: moveRow,
                    })
                })
            }
        </DndProvider>
	);
}

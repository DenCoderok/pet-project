import React, {useContext} from 'react';
import { Context } from '../../../context/context.ts'
import { useTranslation } from "react-i18next";
import { storeMobX } from '../../../storeMobX/todoStoreMobX.ts'
import { observer } from "mobx-react-lite";

const TodoListButtonsMobX = () => {
    const { setFilter } = useContext(Context)
    const { t } = useTranslation();

    const filterTypes = [
        {title: t('filter_title.all'), filterType: 'all'},
        {title: t('filter_title.ready'), filterType: 'ready'},
        {title: t('filter_title.not_ready'), filterType: 'notReady'},
    ]

    return (
        <div className="todoList__wrapper-buttons">
            <button
                type="button"
                onClick={() => storeMobX.addTodoItem()}
                className="button"
            >

                {t('add_todo')}
            </button>

            <div className="todoList__wrapper-buttons_filters">
                {filterTypes.map(elem =>(
                    <button
                        className="buttons"
                        onClick={() => setFilter(elem.filterType)}
                    >
                        {elem.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default observer(TodoListButtonsMobX);

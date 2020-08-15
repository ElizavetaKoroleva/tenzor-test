import * as React from 'react';
import Button from '../Button/Button';

export interface INote {
    id: string,
    title: string,
    text: string,
    isEditable: boolean,
    onDelete: (e?: React.MouseEvent) => void;
    onEdit: (id: string, title: string, text: string) => void;
}

const Note: React.SFC<INote> = ({id, title, text, isEditable, onDelete, onEdit}) => {
  const [currentTitle, setCurrentTitle] = React.useState(title);
  const [currentText, setCurrentText] = React.useState(text);

  return (
    <div className="note">
        <div className="note__buttons-container">
            <Button type="button" 
                    label={isEditable ? "Сохранить" : "Редактировать"} 
                    icon="" onClick={() => onEdit(id, currentTitle, currentText)} />
            <Button type="button" label="Удалить" icon="" onClick={onDelete}/>
        </div>
        <div className="note__content">
            <h2 contentEditable={isEditable} 
                className="note__title"
                suppressContentEditableWarning={true}
                onInput={(e) => setCurrentTitle((e.target as HTMLParagraphElement).innerText)}>
                  {title}
            </h2>
            <p contentEditable={isEditable} 
               className="note__text" 
               suppressContentEditableWarning={true}
               onInput={(e) => setCurrentText((e.target as HTMLParagraphElement).innerText)}>
              {text}
            </p>
        </div>
    </div>
  );
};

export default Note;

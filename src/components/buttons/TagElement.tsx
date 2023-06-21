import React from 'react';
import combineClassName from '@lib/utilities/cx';

interface TagElementProps {
  title: string;
  content?: string;
  fontSize: string;
  active?: boolean;
  onClick?: any;
}

const TagElement: React.FC<TagElementProps> = ({
  title,
  content,
  fontSize = '13px',
  active = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick && onClick}
      className={combineClassName('tag-detail-el', active ? 'active' : '')}
    >
      <div
        className="tag-detail-left"
        style={{
          fontSize,
        }}
      >
        {title}
      </div>
      <div className="tag-detail-right">{content}</div>
    </div>
  );
};

export default TagElement;

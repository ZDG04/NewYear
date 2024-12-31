import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Accordion.css';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState({});

  const toggleItem = (level, index) => {
    setOpenIndex((prevState) => ({
      ...prevState,
      [`${level}-${index}`]: !prevState[`${level}-${index}`],
    }));
  };

  const renderItems = (items, level = 0) => (
    <div className={`accordion-level accordion-level-${level}`}>
      {items.map((item, index) => (
        <div key={`${level}-${index}`} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleItem(level, index)}
          >
            {item.label}
          </div>
          {item.content && openIndex[`${level}-${index}`] && (
            <div className="accordion-content">{item.content}</div>
          )}
          {item.children && openIndex[`${level}-${index}`] && (
            <div className="accordion-children">
              {renderItems(item.children, level + 1)}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return <div className="accordion">{renderItems(items)}</div>;
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node,
      children: PropTypes.array,
    })
  ).isRequired,
};

export default Accordion;

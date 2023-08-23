import React from 'react';

const List = ({peopleProp}) => {
  return (
    <>
      {/* <h2>list component</h2> */}
      {peopleProp.map((person) => {
        const {id, name, age, image} = person;
        return <article key={id} className='person'>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>
      })}
    </>
  );
};

export default List;

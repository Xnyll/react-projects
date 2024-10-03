import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//array using spread operator to include the "all" category/button as well as everything else in an array
const allCategories = ['all', ...new Set(items.map((item) => item.category))] //Set to get only unique values from categories


function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  };

  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </section>
  </main>;
}

export default App;



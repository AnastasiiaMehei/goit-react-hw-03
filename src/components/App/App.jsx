import css from './App.module.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import initialData from '../../data/data.json'
import { useState } from 'react';
export default function App() {
  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState('');
  const addData = (newData) => {
    setData((prevData) => {
      return [...prevData, newData];
    });
  };
  const deleteData = (dataId) => {
    setData((prevData) => {
      return prevData.filter((data) => data.id !== dataId);
    });
  };
  const visibleData = data?.filter((item) =>
    item.text?.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <div className={css.div}>
  <h1>Phonebook</h1>
  <ContactForm onAdd={addData}/>
  <SearchBox data={filter} onFilter={setFilter}/>
  <ContactList data={visibleData} onDelete={deleteData} />
</div>
  )
}
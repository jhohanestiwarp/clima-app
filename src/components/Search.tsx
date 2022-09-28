import { FormEvent, useRef, useState, useEffect } from 'react';
const Search = ({handleSearch}: {handleSearch: (e: FormEvent<HTMLFormElement>, CITY: string) => void}) => {

    const [searchBox, setSearchBox] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChanges = (e: FormEvent) =>{
        const {value} = e.target as HTMLInputElement
        setSearchBox(value)
    }

    useEffect(()=>{
        inputRef.current!.focus();

    }, [])
  return (
    <form id="form" onSubmit={(e) => {
        handleSearch(e, searchBox) 
        setSearchBox('')
        }}> 
        
      <label htmlFor="search"></label>
      <br /> <br />
      <input
        autoComplete="off"
        id="search"
        name="search"
        type="search"
        placeholder="Buscar ubicación"
        className="absolute w-72 h-8 rounded-full mt-12"
        onChange={handleChanges}
        ref={inputRef}/>
    </form>
    
    
  );
};

export default Search;

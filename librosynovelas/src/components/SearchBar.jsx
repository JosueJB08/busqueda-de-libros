import { useState } from "react";
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

const SearchBar = ({placeholder, data}) => {
    const [filterData, setFilterdata] = useState([])
    const [actualWord, setActualWord] = useState("")
    const clearData = ()=>{
        setFilterdata([]);
        setActualWord("");
    }


    const handleFilter = (e) =>{

        const pal = e.target.value
        setActualWord(pal)
        
        const filter = data.filter((v)=>{
            return v.title.toLowerCase().includes(pal.toLowerCase())
        });
        if(pal === ''){
            setFilterdata([])
        }else{
            setFilterdata(filter);
        }
    }

    return (
        <div className="search">
            <div className="searchInput">
                <input type="text" value={actualWord} placeholder={placeholder} onChange={handleFilter} />
                <div className="searchIcon">
                    {
                        filterData.length===0?(<SearchIcon/>):(<CloseIcon className="cursor" onClick={clearData}/>)
                    }
                </div>    
            </div> 
            {
                filterData.length !=0 &&(

                
                <div className="dataResults">
                    {
                        filterData.slice(0,10).map((item, key) =>{
                            return (
                                <a className="dataItem" href={item.link} target="_blank" key={key}> 
                                    <p> {item.title } </p>
                                </a>
                            )
                        })
                    }
                </div>
            )
            }
        </div>
    )
}

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default SearchBar

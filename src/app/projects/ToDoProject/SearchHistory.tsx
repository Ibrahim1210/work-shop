import { useState } from "react";

export const SearchHistory = () => {
  const [searchList, setSearchList] = useState(["ibrahim"]);
  const [search, setSearch] = useState("");
  return (
    <div className="w-96 p-4 flex flex-col gap-4">
      <div className="flex flex-row gap-2">
        <input
          type="text"
          value={search}
          onChange={e=>{
            console.log(e.target.value);
            setSearch(e.target.value)}}
          className="border-2 border-slate-300 rounded-md px-2"
        />
        <button className="bg-orange-100 p-2 rounded-md" onClick={()=>{
            //listeye ekle
           // searchList.push(search)
            setSearchList([search,...searchList])
            //search i resetle
            setSearch("")
        }}>Search</button>
      </div>
      {
        searchList.map((el,i)=><p key={i}  className="bg-orange-100 p-2 rounded-md mb-2">{el}</p>)
      }
    </div>
  );
};

import React, { useState } from "react";

interface SearchHistoryProps {}

export const SearchHistory: React.FC<SearchHistoryProps> = () => {
  const [searchList, setSearchList] = useState<string[]>(["ibrahim"]);
  const [search, setSearch] = useState<string>("");

  const handleDelete = (index: number) => {
    const updatedList = [...searchList];
    updatedList.splice(index, 1);
    setSearchList(updatedList);
  };

  const handleDeleteAll = () => {
    setSearchList([]);
  };

  return (
    <div className="w-96 p-4 flex flex-col gap-4">
      <div className="flex flex-row gap-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-slate-300 rounded-md px-2"
        />
        <button
          className="bg-orange-100 p-2 rounded-md"
          onClick={() => {
            setSearchList([search, ...searchList]);
            setSearch("");
          }}
        >
          Search
        </button>
        <button className="bg-red-500 p-2 rounded-md" onClick={handleDeleteAll}>
          Tümünü Sil
        </button>
      </div>
      {searchList.map((el, i) => (
        <div key={i} className="flex justify-between items-center">
          <p className="bg-orange-100 p-2 rounded-md mb-2">{el}</p>
          <button
            className="bg-red-500 p-2 rounded-md"
            onClick={() => handleDelete(i)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

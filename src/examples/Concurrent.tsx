// //Data
// import { data } from "./data";

// //Global
// import { ChangeEvent, useMemo, useState, useTransition } from "react";

// interface IPerson {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
// }

// const Concurrent = () => {
//   const [value, setValue] = useState<string>(""),
//     [filteredValue, setFilteredValue] = useState<string>(""),
//     [items] = useState<IPerson[]>(data);

//   const [isPending, startTransition] = useTransition();

//   const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);

//     startTransition(() => {
//       setFilteredValue(e.target.value);
//     });
//   };

//   const returnFilteredItems = useMemo(() => {
//     return items.filter(item =>
//       item.email.toLowerCase().includes(filteredValue)
//     );
//   }, [filteredValue, items]);

//   return (
//     <>
//       <input type="text" value={value} onChange={onChangeValue} />

//       {isPending && <h1>Loading...</h1>}

//       <section>
//         {returnFilteredItems.map(item => (
//           <div key={item.id}>
//             <p>name - {item.name}</p>
//             <p>{item.email}</p>
//           </div>
//         ))}
//       </section>
//     </>
//   );
// };

// export default Concurrent;

//Data
import { data } from "./data";

//Global
import { ChangeEvent, useDeferredValue, useMemo, useState } from "react";

//Styles
import "./styles.less";

interface IPerson {
  id: number;
  name: string;
  age: number;
  email: string;
}

const Concurrent = () => {
  const [value, setValue] = useState<string>(""),
    [items] = useState<IPerson[]>(data);

  const deferredValue = useDeferredValue(value);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const returnFilteredItems = useMemo(() => {
    return items.filter(item =>
      item.email.toLowerCase().includes(deferredValue)
    );
  }, [deferredValue, items]);

  return (
    <>
      <input type="text" value={value} onChange={onChangeValue} />

      <section>
        {returnFilteredItems.map(item => (
          <div key={item.id}>
            <p>name - {item.name}</p>
            <p>{item.email}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export { Concurrent };

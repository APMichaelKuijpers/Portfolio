import React from "react";
import styles from "./GameOfThrones.module.css";
import {useState, useEffect} from "react";

//  HET PROBLEEM IS DAT DE THRONES API IN EEN [] EN HET LUKT ME MAAR NIET OM DAAR BINNEN TE KOMEN, 
//  DAAROM LAAT IK DE JAVASCRIPT VERSIE ZIEN, WAAR HIJ WEL WERKT.



// ** DE TYPESCRIPT CODE**

// interface rootGOT {
//   got: GOT[]
// }
// interface GOT {
//   id: number;
//   fullName: string;
//   imageUrl: string;
// }
// const GameOfThrones2 = () => {
//   const [data, setData] = useState<rootGOT[]>([]);
//   const [Cdata, setCData] = useState<GOT[]>([]);
//     // const [data, setData] = useState<string[]>([]);
//     const [gotCharacters, setGotCharacters] = useState<[]>([]);
//     const getData = async () => {
//       let response = await fetch("https://ThronesApi.com/api/v2/Characters");
//       let dataCharacters: rootGOT[] = await response.json();
//       for (let i = 0; i < dataCharacters.length; i++) {
//         // data.push({
//         //   got: dataCharacters[i].got
//         // })
//         Cdata.push({
//           id: dataCharacters[i].got[i].id,
//           fullName: dataCharacters[i].got[i].fullName,
//           imageUrl: dataCharacters[i].got[i].imageUrl
//         })
//         Cdata.push({
//           id: dataCharacters[i].got[0].id,
//           fullName: dataCharacters[i].got[0].fullName,
//           imageUrl: dataCharacters[i].got[0].imageUrl
//         })
//       }
//       // for (const dataCharacter of dataCharacters) {
//       //   data.push({
//       //     got: dataCharacter.got
//       //     })
//       //     for (const character of data) {
//       //       Cdata.push({
//       //         id: character.got[0].id,
//       //         fullName: character.got[0].fullName,
//       //         imageUrl: character.got[0].imageUrl
//       //       })
//       //     }
//       // }
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//     return (
//         <div>
//             {Cdata.map(Character => (
//               <p key={Character.id}>{Character.fullName}</p>
//               ))}
//         </div>
//     );
//   };

// ** DE JAVASCRIPT CODE**
const GameOfThrones = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
  const response = await fetch("https://ThronesApi.com/api/v2/Characters");
  const data = await response.json();
  setData(data);
};
useEffect(() => {
  getData();
}, []);
  return (
      <div className={styles.CharactersContainer}>
        {data.map((character, index) => (
           <div className={styles.Characters}>
              <img className={styles.CharacterImage} src={character.imageUrl}/>
              <p>{character.firstName} {character.lastName}</p>
          </div>
        ))}
      </div>
  );
};


const app= () => {
    return (
        <div className={styles.App}>
            <h1 className={styles.textpadding}>Game of Thrones characters</h1>
            <hr></hr>
            <GameOfThrones/>
        </div>
      );
}

export default app











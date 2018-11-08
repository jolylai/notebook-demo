import React from 'react';
import { connect } from 'dva';

import styles from './index.css';

function IndexPage() {
  // const deepFlatten = arr => {
  //   const chl = arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v));
  //   console.log("chl", chl);
  //   return [].concat(chl);
  // };

  // console.log(
  //   " deepFlatten([1,[2],[[3],4],5])",
  //   deepFlatten([1, [2], [[3, [6]], 4], 5])
  // );

  // console.log(" deepFlatten([1,[2],[[3],4],5])", deepFlatten([1, [2]]));

  // const dropElements = (arr, func) => {
  //   while (arr.length && !func(arr[0])) {
  //     arr.shift();
  //   }
  //   return arr;
  // };
  // console.log(
  //   "dropElements([1, 2, 3, 4], n => n >= 3)",
  //   dropElements([1, 2, 3, 4], n => n >= 3)
  // );

  // const fillArray = (arr, val, start = 0, end = arr.length) => {
  //   return arr.map(
  //     (item, index) => (start <= index && end > index ? val : item)
  //   );
  // };

  // console.log(
  //   "fillArray([1,2,3,4],'8',1,3)",
  //   fillArray([1, 2, 3, 4], "8", 1, 3)
  // );

  // const ilterNonUnique = arr =>
  //   arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

  // console.log(
  //   "ilterNonUnique([1,2,2,3,4,4,5])",
  //   ilterNonUnique([1, 2, 2, 3, 4, 4, 5])
  // );

  // const flattenDepth = (arr, deep = 1) =>
  //   // deep !== 1 ? arr.re
  //   console.log(
  //     "flattenDepth([1,[2],[[[3],4],5]], 2)",
  //     flattenDepth([1, [2], [[[3], 4], 5]], 2)
  //   );

  // const all = (arr, fn = Boolean) => arr.every(fn);
  // console.log("all", all([4, 2, 3, 0]));

  // const arrayToCSV = (arr, delimiter = ",") =>
  //   arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join("\n");

  // console.log(
  //   "arrayToCSV([['a', 'b'], ['c', 'd']])",
  //   arrayToCSV([["a", "b"], ["c", "d"]])
  // );

  // const bifurcate = (arr, filter) =>
  //   arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [
  //     [],
  //     []
  //   ]);
  // console.log(
  //   "bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true])",
  //   bifurcate(["beep", "boop", "foo", "bar"], [true, true, false, true])
  // );

  // const bifurcateBy = (arr, fn) =>
  //   arr.reduce((acc, val) => (acc[fn(val) ? 0 : 1].push(val), acc), [[], []]);

  // console.log(
  //   "bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b')",
  //   bifurcateBy(["beep", "boop", "foo", "bar"], x => x[0] === "b")
  // );

  // const countBy = (arr, fn) =>
  //   arr
  //     .map(typeof fn === "function" ? fn : v => v[fn])
  //     .reduce((acc, val) => ((acc[val] = (acc[val] || 0) + 1), acc), {});

  // console.log(
  //   "countBy([6.1, 4.2, 6.3], Math.floor)",
  //   countBy([6.1, 4.2, 6.3], Math.floor)
  // );

  // const differenceBy = (a, b, fn) => {
  //   const s = new Set(b.map(fn));
  //   return a.filter(v => !s.has(fn(v)));
  // };
  // console.log(
  //   "differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x), ",
  //   differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x)
  // );

  // const differenceWith = (a, b, comp) =>
  //   a.filter((val, index) => comp(val, b[index]));

  // console.log(
  //   "differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b))",
  //   differenceWith(
  //     [1, 1.2, 1.5, 3, 0],
  //     [1.9, 3, 0],
  //     (a, b) => Math.round(a) === Math.round(b)
  //   )
  // );

  // const a = [1, 2, 3, 4];
  // const dropRightWhile = (arr, fn) => {
  //   while (arr.length > 0 && !fn(arr[arr.length - 1])) {
  //     // arr = arr.slice(0, -1);
  //     arr.pop();
  //   }
  //   return arr;
  // };

  // console.log(
  //   "dropRightWhile([1, 2, 3, 4], n => n < 3)",
  //   dropRightWhile(a, n => n < 3)
  // );
  // console.log("a", a);
  // const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
  // console.log("everyNth", everyNth([1, 2, 3, 4], 1));

  // const filterNonUniqueBy = (arr, fn) => arr.filter();

  // console.log(
  //   filterNonUniqueBy(
  //     [
  //       { id: 0, value: "a" },
  //       { id: 1, value: "b" },
  //       { id: 2, value: "c" },
  //       { id: 1, value: "d" },
  //       { id: 0, value: "e" }
  //     ],
  //     (a, b) => a.id == b.id
  //   )
  // );

  const data = [{ key: 1, children: [{ key: 2, children: [{ key: 3, children: [] }] }] }];

  const flat = arr =>
    arr.reduce((acc, val) => {
      const { children, ...rest } = val;
      if (Array.isArray(children)) {
        return acc.concat(rest, flat(children));
      }
      return acc.concat(rest);
    }, []);

  console.log('flat', flat(data));
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li id="test">
          To get started, edit <code>src/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://github.com/dvajs/dva">Getting Started</a>
        </li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);

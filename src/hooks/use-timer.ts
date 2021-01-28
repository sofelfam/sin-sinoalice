import * as React from 'react';
const { useState, useEffect } = React;

/**
 * useTimer: 指定された時間ごとにアップデートされるDateの値を返す
 * @param {NodeJS.Timeout} timeoutId タイマーID
 * @param {(any?: any) => Date} func アップデート関数
 * @param {number} interval タイマーがインクリメントされる間隔
 * @returns {Date} 現在のDate
 */
export default (timeoutId: NodeJS.Timeout, func:(any?: any) => Date, interval: number):Date => {
  const [count, setCount] = useState(new Date());

  useEffect(() => {
    timeoutId = setTimeout(setCount.bind(null, func), interval);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [count]);

  return count;
}
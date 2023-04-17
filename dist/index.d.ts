/**
 * url 相关函数
 */
/**
 * 获取地址栏的参数
 * @param {*} url
 * @returns
 */
declare const getQueryToJson: (url: string) => Record<string, string>;

declare const index$2_getQueryToJson: typeof getQueryToJson;
declare namespace index$2 {
  export {
    index$2_getQueryToJson as getQueryToJson,
  };
}

declare const testMap: Map<number, number>;
declare const arr: number[];
declare const testPromise: () => Promise<unknown>;
declare const sum: (a: number, b: number) => number;

declare const index$1_arr: typeof arr;
declare const index$1_sum: typeof sum;
declare const index$1_testMap: typeof testMap;
declare const index$1_testPromise: typeof testPromise;
declare namespace index$1 {
  export {
    index$1_arr as arr,
    index$1_sum as sum,
    index$1_testMap as testMap,
    index$1_testPromise as testPromise,
  };
}

/**
 * vue filter
 * 字符串截取方法
 */
declare const strlen: (len?: number) => (value: string | number) => string;

declare const index_strlen: typeof strlen;
declare namespace index {
  export {
    index_strlen as strlen,
  };
}

export { index$1 as examples, index as filter, index$2 as url };

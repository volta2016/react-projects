# Hook

## Custom Hook

The most important on custom hook is that must return something, not to be tied to the same url, let's receive the url as a parameter.

In the hooks you can use all native hooks without problems. What this return is for is to be able to access later to these elements

to import this hook remembers that it is a named export.

This is not the better because we call to useEffect in each rendering.

```js
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  console.log("useFetch");

  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    console.log("useEffect");
    fetchData(setData);
  }, []);

  return { data };
};
```

let´s to aply try, catch and finall. **finally** always it was applied to final

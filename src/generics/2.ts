type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
}

function compare<T extends Pick<AllType, 'name' | 'position' | 'color' | 'weight'>>(top: T, bottom: T): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const obj1: Pick<AllType, 'name' | 'position' | 'color' | 'weight'> = {
  name: 'Object 1',
  position: 1,
  color: 'red',
  weight: 10
};

const obj2: Pick<AllType, 'name' | 'position' | 'color' | 'weight'> = {
  name: 'Object 2',
  position: 2,
  color: 'blue',
  weight: 20
};

const comparedObj: AllType = compare(obj1, obj2);
console.log(comparedObj);

export {};
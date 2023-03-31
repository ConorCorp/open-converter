export const cloneClassObject = (object: any) =>
  Object.assign(Object.create(Object.getPrototypeOf(object)), object);

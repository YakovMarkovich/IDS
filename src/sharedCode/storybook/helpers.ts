import { commonArgsForStoryBook } from "./../helpers/storiesArgs";

/** Generate an array of component's available props */
export const getKeysOfType = (typeClass: any, omittedProps: any[]) => {
  const typeKeys: string[] = Object.keys(new typeClass());
  return typeKeys.filter((item: any) => !omittedProps.includes(item));
};

/** Generate an object of storybook argTypes */
export const getStoriesArgsTypes = (typeKeys: any[]): any => {
  const updatedObject = {};
  for (const key of Object.keys(commonArgsForStoryBook)) {
    updatedObject[key] = typeKeys?.includes(key)
      ? commonArgsForStoryBook[key]
      : { table: { disable: true } };
  }
  return updatedObject;
};

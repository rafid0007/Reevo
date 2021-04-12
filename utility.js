export const routeMaker = string => (
    string.trim().split(' ').join('-').toLowerCase()
);
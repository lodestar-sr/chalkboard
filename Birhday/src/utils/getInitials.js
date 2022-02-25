export const getInitials = (name) => {
  return name.split(' ').length > 1
    ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    : name[0]
};

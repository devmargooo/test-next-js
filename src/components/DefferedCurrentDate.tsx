export const DefferedCurrentDate = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(<p>Deffered data: {Date.now()}</p>), 2000);
  });
};

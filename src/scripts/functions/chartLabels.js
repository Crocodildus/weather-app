const chartLabels = (hourData, arr) => {
  const now = new Date();
  const nowH = now.getHours();
  for (const element of hourData) {
    let futureH = nowH + Number(element);
    if (futureH > 24) futureH = futureH - 24;
    if (element % 4 === 0) arr.push(futureH);
  }
};

export default chartLabels;

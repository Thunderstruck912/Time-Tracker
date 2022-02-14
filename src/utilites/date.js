const date = new Date();

export const DATA = {
	dateNow: () => {
		return `${date.getDate()}.${
			date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
		}.${date.getFullYear()}`;
	},
	dateNextDay: () => {
		return `${date.getDate() + 1}.${
			date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
		}.${date.getFullYear()}`;
	},
};

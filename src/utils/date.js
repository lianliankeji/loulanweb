export const timeFormat = (timestamp) => {
	if (timestamp) {
		var date = new Date(timestamp * 1000);
	} else {
		var date = new Date();
	}
	let Y = date.getFullYear(),
		m = date.getMonth() + 1,
		d = date.getDate(),
		H = date.getHours(),
		i = date.getMinutes(),
		s = date.getSeconds();
	if (m < 10) {
		m = '0' + m;
	}
	if (d < 10) {
		d = '0' + d;
	}
	if (H < 10) {
		H = '0' + H;
	}
	if (i < 10) {
		i = '0' + i;
	}
	if (s < 10) {
		s = '0' + s;
	}
	var t = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s;
	return t;
}
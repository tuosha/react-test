import { nanoid } from 'nanoid'

const compose = (...fns) =>
	fns.reduceRight((prevFn, nextFn) =>
		(...args) => nextFn(prevFn(...args)), value => value
);

const checkInnerRecords = (records) => {
	const checkNonEmptyObject = (typeof records === 'object' && records.length)
	return checkNonEmptyObject ? (
		<ul>{records.map(el =>
		  <li key={nanoid()}>{
			  checkNonEmptyObject ? checkInnerRecords(el) : el}
		  </li>)}
		</ul>) :
	  records
}

export {
	compose,
	checkInnerRecords
}
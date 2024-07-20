export default function Result(props) {
	return(
		<>
			<center>
				<div className="news">
				<h2>{props.number}. {props.title}</h2>
				{props.description} <br/>
				<a href={props.url}>Read More</a>
				</div>
			</center>
		</>
	);
}
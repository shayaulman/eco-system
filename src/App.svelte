<script>
	import Rabbit from './app';

	const rabbit = new Rabbit('male');
	console.log(rabbit.timeOfBirth)
	const func = () => {
		console.log(rabbit.position())
		console.log(rabbit.age())
	}
</script>

<p></p>
<button on:click={ func }>test</button>


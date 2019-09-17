<script>
	import Rabbit from './app';

	const rabbit = new Rabbit('male');
	const func = () => {
		console.log(rabbit.age())
	}
</script>

<p></p>
<button on:click={ func }>test</button>
<p>{ rabbit.timeOfBirth }</p>
<p>{ rabbit.position().x }</p>



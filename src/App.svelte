<script>
	import Rabbit from './app';



	const move = () => {
		rabbits.forEach(r => r.move())
		console.log(rabbits[0].position.x)
	}
	let rabbits = [new Rabbit, new Rabbit]

	let age = 0;



	// console.log(rabbits)
</script>

<div class="container">
	{#each rabbits as rabbit, i}
		<div
			class="rabbit"
			style={`top: ${rabbits[i].position.y}px; left: ${rabbit.position.x}px`}
		>
		</div>
	{/each}
	<button on:click={ move }>MOVE!</button>
</div>


<style>
	.container {

	}

	.rabbit {
		position: absolute;
		height: 10px;
		width: 10px;
		background-color: red;
	}

</style>


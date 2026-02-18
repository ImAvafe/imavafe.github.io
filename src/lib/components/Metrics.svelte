<script lang="ts">
	const METRICS: [{ name: string; value: string; clarifier?: string }] = [
		{
			name: 'Total Sessions',
			value: '100B'
		},
		{
			name: 'Peak Concurrent Sessions',
			value: '25M'
		},
		{
			name: 'Community Members',
			value: '125k'
		}
	];
</script>

<div class="stats flex flex-col p-2 outline-1 outline-neutral outline-dashed sm:flex-row">
	{#each METRICS as metric (metric)}
		<div class="stat place-items-center">
			<div class="stat-title">{metric.name}</div>
			<div class="stat-value">{metric.value}</div>
			<div class="stat-desc">{metric.clarifier}</div>
		</div>
	{/each}
</div>

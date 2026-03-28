<script lang="ts">
	const METRICS: [{ name: string; value: string; clarifier?: string }] = [
		{
			name: 'Total User Sessions',
			value: '100B+',
			clarifier: 'on my products'
		},
		{
			name: 'Community Members',
			value: '125k',
			clarifier: 'in my groups'
		},
		{
			name: 'Professional Experience',
			value: '6yr',
			clarifier: 'or 10+ hobbyist'
		}
	];
</script>

<div class="stats flex flex-col p-2 outline-1 outline-neutral outline-dashed xs:flex-row">
	{#each METRICS as metric (metric)}
		<div class="my-4 stat place-items-center p-0 sm:my-0 sm:p-4">
			<div class="stat-title">{metric.name}</div>
			<div class="stat-value">{metric.value}</div>
			<div class="stat-desc">{metric.clarifier}</div>
		</div>
	{/each}
</div>

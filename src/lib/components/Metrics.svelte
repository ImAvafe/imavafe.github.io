<script lang="ts">
	const METRICS: { name: string; value: string; clarifier?: string }[] = [
		{
			name: 'Embedded User Sessions',
			value: '100B+'
		},
		{
			name: 'Community Members',
			value: '125k'
		},
		{
			name: 'Professional Experience',
			value: '6yr'
		}
	];
</script>

<div class=" flex flex-col p-2 outline-1 outline-border outline-dashed">
	<div class="stats flex flex-col xs:flex-row">
		{#each METRICS as metric (metric)}
			<div class="my-4 stat place-items-center p-0 sm:my-0 sm:p-4">
				<div class="stat-title">
					{metric.name}
				</div>
				<div class="stat-value">{metric.value}</div>
				<div class="stat-desc">{metric.clarifier}</div>
			</div>
		{/each}
	</div>
	<p class="mt-0 mb-2 text-center text-sm whitespace-nowrap text-base-content/60">
		across my products*
	</p>
</div>

<div id="pageContentHeader">
  <{include file="official:`$tpl.current`header.tpl"}>
</div>
<div id="pageContentBody">
	<div class="llpagetitle">In the Spotlight</div>
	<{if $campaigns_now}>
	<div class="llboxlightyellow llround llboxbd">
		<{foreach from=$campaigns_now item=campaign}>
		<{include file="pages/campaign.tpl"}>
		<span class="llclear" style="height: 1em"></span>
		<{/foreach}>
	</div>
	<span class="llclear" style="height: 2em"></span>
	<{/if}>
	<{if $campaigns_latest}>
	<div class="llboxlightyellow llborderb llroundt llboxbd h1">
		Most Recent
	</div>
	<div class="llboxlightyellow llroundb llboxbd">
		<{foreach from=$campaigns_latest item=campaign name=campaign}>
		<{include file="pages/campaign.tpl"}>
		<{if !$smarty.foreach.campaign.last}><span class="llclear" style="height: 1em"></span><{/if}>
		<{/foreach}>
	</div>
	<{/if}>
</div>
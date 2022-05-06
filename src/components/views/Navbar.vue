<template>
	<div class="title">
		<div class="searchbar">
			<img src=../../assets/搜索.png class="mg">
			<input class="sousuo" type="text" id="search" placeholder="搜索..">
		</div>
		<div class="title-right">
			<div class="menucard">
				<router-link to="../Login.vue">
					　　 <span class="">登录</span>
				</router-link>
			</div>
			<div class="menucard">
				<router-link to="../Register.vue">
					　　<span class="">注册</span>
				</router-link>
			</div>

		</div>
	</div>
</template>
<script>
	export default {
		name: 'Title',
	}
</script>
<style>
	.title {
		margin-left: 0px;
		margin-top: 20px;
		height: 50px;
		width: 100%;
		background-color: #fff;
		box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 #ffffff;
		display: flex;
		justify-content: space-between;
	}

	.menucard{
		outline: none;
		margin-left: 15px;
		background-color: rgba(39, 40, 34, 1.0);
		border-radius: 18px;
		box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 #ffffff;
	}

	span {
		font-size: 15px;
		color: #fff;
	}

	a {
		width: 30px;
		height: 10px;
		color: black;
		margin: 0px 10px;
		text-decoration: none;
		line-height: 48px;
		text-align: center
	}

	a:hover {
		cursor: pointer;
	}

	#search {
		width: 400px;
		height: 40px;
		border: none;
		outline: none;
		font-size: 16px;
		color: rgb(112, 112, 112);
		margin-left: 10px;
		margin-right: 50px;
	}

	.searchbar {
		border: rgb(218, 218, 218) solid 1px;
		border-radius: 2em;
		display: flex;
		outline: none;
		margin-left: 20px;
		margin-top: -8px;
		width: 552px;
		height: 42px;
		box-shadow: 0px 0px 5px rgb(212, 212, 212);
		box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 #ffffff;

	}

	.mg {
		height: 25px;
		margin-left: 15px;
		margin-top: 9px;
		display: flex;
		cursor: pointer;
	}

	#search,
	.mcp,
	.mg {
		vertical-align: middle;
	}

	.title-right {
		width: 380px;
		height: 48px;
		display: flex;
		margin-right: -150px;
		margin-top: -5px;
	}
</style>

<div class="hidden dark:block relative">
	<div class="night">
		{#each { length: 50 } as _}
			<div class="shooting_star" />
		{/each}
	</div>
</div>

<style>
	.night {
		position: absolute;
		top: -50vmax;
		left: -50vmax;
		width: 100vmax;
		height: 100vmax;
		transform: rotateZ(53deg);
	}

	.shooting_star {
		position: absolute;
		left: 50%;
		top: 50%;
		height: 2px;
		background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
		border-radius: 999px;
		filter: drop-shadow(0 0 6px #699bff);
		-webkit-animation: tail 9000ms ease-in-out infinite, shooting 9000ms ease-in-out infinite;
		animation: tail 9000ms ease-in-out infinite, shooting 9000ms ease-in-out infinite;
	}
	.shooting_star::before {
		content: '';
		position: absolute;
		top: calc(50% - 1px);
		right: 0;
		height: 2px;
		background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #5f91ff, rgba(0, 0, 255, 0));
		transform: translateX(50%) rotateZ(45deg);
		border-radius: 100%;
		-webkit-animation: shining 9000ms ease-in-out infinite;
		animation: shining 9000ms ease-in-out infinite;
	}
	.shooting_star::after {
		content: '';
		position: absolute;
		top: calc(50% - 1px);
		right: 0;
		height: 2px;
		background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #5f91ff, rgba(0, 0, 255, 0));
		transform: translateX(50%) rotateZ(45deg);
		border-radius: 100%;
		-webkit-animation: shining 9000ms ease-in-out infinite;
		animation: shining 9000ms ease-in-out infinite;
		transform: translateX(50%) rotateZ(-45deg);
	}
	.shooting_star:nth-child(1) {
		top: 60%;
		left: -2%;
		-webkit-animation-delay: 5437ms;
		animation-delay: 5437ms;
		opacity: 0.94;
	}
	.shooting_star:nth-child(1)::before,
	.shooting_star:nth-child(1)::after {
		-webkit-animation-delay: 5437ms;
		animation-delay: 5437ms;
	}
	.shooting_star:nth-child(2) {
		top: 21%;
		left: -6%;
		-webkit-animation-delay: 2933ms;
		animation-delay: 2933ms;
		opacity: 0.56;
	}
	.shooting_star:nth-child(2)::before,
	.shooting_star:nth-child(2)::after {
		-webkit-animation-delay: 2933ms;
		animation-delay: 2933ms;
	}
	.shooting_star:nth-child(3) {
		top: 73%;
		left: 4%;
		-webkit-animation-delay: 2169ms;
		animation-delay: 2169ms;
		opacity: 0.99;
	}
	.shooting_star:nth-child(3)::before,
	.shooting_star:nth-child(3)::after {
		-webkit-animation-delay: 2169ms;
		animation-delay: 2169ms;
	}
	.shooting_star:nth-child(4) {
		top: 36%;
		left: 6%;
		-webkit-animation-delay: 6894ms;
		animation-delay: 6894ms;
		opacity: 0.72;
	}
	.shooting_star:nth-child(4)::before,
	.shooting_star:nth-child(4)::after {
		-webkit-animation-delay: 6894ms;
		animation-delay: 6894ms;
	}
	.shooting_star:nth-child(5) {
		top: 34%;
		left: 9%;
		-webkit-animation-delay: 7532ms;
		animation-delay: 7532ms;
		opacity: 0.72;
	}
	.shooting_star:nth-child(5)::before,
	.shooting_star:nth-child(5)::after {
		-webkit-animation-delay: 7532ms;
		animation-delay: 7532ms;
	}
	.shooting_star:nth-child(6) {
		top: 61%;
		left: -3%;
		-webkit-animation-delay: 1230ms;
		animation-delay: 1230ms;
		opacity: 0.76;
	}
	.shooting_star:nth-child(6)::before,
	.shooting_star:nth-child(6)::after {
		-webkit-animation-delay: 1230ms;
		animation-delay: 1230ms;
	}
	.shooting_star:nth-child(7) {
		top: 68%;
		left: -1%;
		-webkit-animation-delay: 1988ms;
		animation-delay: 1988ms;
		opacity: 0.7;
	}
	.shooting_star:nth-child(7)::before,
	.shooting_star:nth-child(7)::after {
		-webkit-animation-delay: 1988ms;
		animation-delay: 1988ms;
	}
	.shooting_star:nth-child(8) {
		top: 79%;
		left: 7%;
		-webkit-animation-delay: 3970ms;
		animation-delay: 3970ms;
		opacity: 0.94;
	}
	.shooting_star:nth-child(8)::before,
	.shooting_star:nth-child(8)::after {
		-webkit-animation-delay: 3970ms;
		animation-delay: 3970ms;
	}
	.shooting_star:nth-child(9) {
		top: 23%;
		left: 5%;
		-webkit-animation-delay: 5760ms;
		animation-delay: 5760ms;
		opacity: 0.73;
	}
	.shooting_star:nth-child(9)::before,
	.shooting_star:nth-child(9)::after {
		-webkit-animation-delay: 5760ms;
		animation-delay: 5760ms;
	}
	.shooting_star:nth-child(10) {
		top: 59%;
		left: -5%;
		-webkit-animation-delay: 5014ms;
		animation-delay: 5014ms;
		opacity: 0.88;
	}
	.shooting_star:nth-child(10)::before,
	.shooting_star:nth-child(10)::after {
		-webkit-animation-delay: 5014ms;
		animation-delay: 5014ms;
	}
	.shooting_star:nth-child(11) {
		top: 83%;
		left: 6%;
		-webkit-animation-delay: 2981ms;
		animation-delay: 2981ms;
		opacity: 0.69;
	}
	.shooting_star:nth-child(11)::before,
	.shooting_star:nth-child(11)::after {
		-webkit-animation-delay: 2981ms;
		animation-delay: 2981ms;
	}
	.shooting_star:nth-child(12) {
		top: 72%;
		left: -8%;
		-webkit-animation-delay: 7579ms;
		animation-delay: 7579ms;
		opacity: 0.98;
	}
	.shooting_star:nth-child(12)::before,
	.shooting_star:nth-child(12)::after {
		-webkit-animation-delay: 7579ms;
		animation-delay: 7579ms;
	}
	.shooting_star:nth-child(13) {
		top: 56%;
		left: -4%;
		-webkit-animation-delay: 489ms;
		animation-delay: 489ms;
		opacity: 0.89;
	}
	.shooting_star:nth-child(13)::before,
	.shooting_star:nth-child(13)::after {
		-webkit-animation-delay: 489ms;
		animation-delay: 489ms;
	}
	.shooting_star:nth-child(14) {
		top: 55%;
		left: -1%;
		-webkit-animation-delay: 417ms;
		animation-delay: 417ms;
		opacity: 0.96;
	}
	.shooting_star:nth-child(14)::before,
	.shooting_star:nth-child(14)::after {
		-webkit-animation-delay: 417ms;
		animation-delay: 417ms;
	}
	.shooting_star:nth-child(15) {
		top: 53%;
		left: 8%;
		-webkit-animation-delay: 5422ms;
		animation-delay: 5422ms;
		opacity: 0.81;
	}
	.shooting_star:nth-child(15)::before,
	.shooting_star:nth-child(15)::after {
		-webkit-animation-delay: 5422ms;
		animation-delay: 5422ms;
	}
	.shooting_star:nth-child(16) {
		top: 12%;
		left: -9%;
		-webkit-animation-delay: 3644ms;
		animation-delay: 3644ms;
		opacity: 0.64;
	}
	.shooting_star:nth-child(16)::before,
	.shooting_star:nth-child(16)::after {
		-webkit-animation-delay: 3644ms;
		animation-delay: 3644ms;
	}
	.shooting_star:nth-child(17) {
		top: 87%;
		left: -2%;
		-webkit-animation-delay: 3257ms;
		animation-delay: 3257ms;
		opacity: 0.53;
	}
	.shooting_star:nth-child(17)::before,
	.shooting_star:nth-child(17)::after {
		-webkit-animation-delay: 3257ms;
		animation-delay: 3257ms;
	}
	.shooting_star:nth-child(18) {
		top: 90%;
		left: -1%;
		-webkit-animation-delay: 4386ms;
		animation-delay: 4386ms;
		opacity: 0.72;
	}
	.shooting_star:nth-child(18)::before,
	.shooting_star:nth-child(18)::after {
		-webkit-animation-delay: 4386ms;
		animation-delay: 4386ms;
	}
	.shooting_star:nth-child(19) {
		top: 16%;
		left: 7%;
		-webkit-animation-delay: 4291ms;
		animation-delay: 4291ms;
		opacity: 0.86;
	}
	.shooting_star:nth-child(19)::before,
	.shooting_star:nth-child(19)::after {
		-webkit-animation-delay: 4291ms;
		animation-delay: 4291ms;
	}
	.shooting_star:nth-child(20) {
		top: 80%;
		left: -6%;
		-webkit-animation-delay: 3777ms;
		animation-delay: 3777ms;
		opacity: 0.76;
	}
	.shooting_star:nth-child(20)::before,
	.shooting_star:nth-child(20)::after {
		-webkit-animation-delay: 3777ms;
		animation-delay: 3777ms;
	}
	.shooting_star:nth-child(21) {
		top: 24%;
		left: -3%;
		-webkit-animation-delay: 9524ms;
		animation-delay: 9524ms;
		opacity: 0.94;
	}
	.shooting_star:nth-child(21)::before,
	.shooting_star:nth-child(21)::after {
		-webkit-animation-delay: 9524ms;
		animation-delay: 9524ms;
	}
	.shooting_star:nth-child(22) {
		top: 32%;
		left: -7%;
		-webkit-animation-delay: 3626ms;
		animation-delay: 3626ms;
		opacity: 0.85;
	}
	.shooting_star:nth-child(22)::before,
	.shooting_star:nth-child(22)::after {
		-webkit-animation-delay: 3626ms;
		animation-delay: 3626ms;
	}
	.shooting_star:nth-child(23) {
		top: 20%;
		left: -2%;
		-webkit-animation-delay: 1715ms;
		animation-delay: 1715ms;
		opacity: 0.89;
	}
	.shooting_star:nth-child(23)::before,
	.shooting_star:nth-child(23)::after {
		-webkit-animation-delay: 1715ms;
		animation-delay: 1715ms;
	}
	.shooting_star:nth-child(24) {
		top: 61%;
		left: -7%;
		-webkit-animation-delay: 5491ms;
		animation-delay: 5491ms;
		opacity: 0.51;
	}
	.shooting_star:nth-child(24)::before,
	.shooting_star:nth-child(24)::after {
		-webkit-animation-delay: 5491ms;
		animation-delay: 5491ms;
	}
	.shooting_star:nth-child(25) {
		top: 89%;
		left: 5%;
		-webkit-animation-delay: 8908ms;
		animation-delay: 8908ms;
		opacity: 0.68;
	}
	.shooting_star:nth-child(25)::before,
	.shooting_star:nth-child(25)::after {
		-webkit-animation-delay: 8908ms;
		animation-delay: 8908ms;
	}
	.shooting_star:nth-child(26) {
		top: 39%;
		left: 8%;
		-webkit-animation-delay: 8521ms;
		animation-delay: 8521ms;
		opacity: 0.67;
	}
	.shooting_star:nth-child(26)::before,
	.shooting_star:nth-child(26)::after {
		-webkit-animation-delay: 8521ms;
		animation-delay: 8521ms;
	}
	.shooting_star:nth-child(27) {
		top: 83%;
		left: 10%;
		-webkit-animation-delay: 6966ms;
		animation-delay: 6966ms;
		opacity: 0.9;
	}
	.shooting_star:nth-child(27)::before,
	.shooting_star:nth-child(27)::after {
		-webkit-animation-delay: 6966ms;
		animation-delay: 6966ms;
	}
	.shooting_star:nth-child(28) {
		top: 22%;
		left: 8%;
		-webkit-animation-delay: 1018ms;
		animation-delay: 1018ms;
		opacity: 0.72;
	}
	.shooting_star:nth-child(28)::before,
	.shooting_star:nth-child(28)::after {
		-webkit-animation-delay: 1018ms;
		animation-delay: 1018ms;
	}
	.shooting_star:nth-child(29) {
		top: 16%;
		left: 4%;
		-webkit-animation-delay: 7647ms;
		animation-delay: 7647ms;
		opacity: 0.71;
	}
	.shooting_star:nth-child(29)::before,
	.shooting_star:nth-child(29)::after {
		-webkit-animation-delay: 7647ms;
		animation-delay: 7647ms;
	}
	.shooting_star:nth-child(30) {
		top: 78%;
		left: 6%;
		-webkit-animation-delay: 9439ms;
		animation-delay: 9439ms;
		opacity: 0.73;
	}
	.shooting_star:nth-child(30)::before,
	.shooting_star:nth-child(30)::after {
		-webkit-animation-delay: 9439ms;
		animation-delay: 9439ms;
	}
	.shooting_star:nth-child(31) {
		top: 31%;
		left: 5%;
		-webkit-animation-delay: 1017ms;
		animation-delay: 1017ms;
		opacity: 0.7;
	}
	.shooting_star:nth-child(31)::before,
	.shooting_star:nth-child(31)::after {
		-webkit-animation-delay: 1017ms;
		animation-delay: 1017ms;
	}
	.shooting_star:nth-child(32) {
		top: 88%;
		left: -3%;
		-webkit-animation-delay: 8627ms;
		animation-delay: 8627ms;
		opacity: 0.69;
	}
	.shooting_star:nth-child(32)::before,
	.shooting_star:nth-child(32)::after {
		-webkit-animation-delay: 8627ms;
		animation-delay: 8627ms;
	}
	.shooting_star:nth-child(33) {
		top: 79%;
		left: 8%;
		-webkit-animation-delay: 671ms;
		animation-delay: 671ms;
		opacity: 0.83;
	}
	.shooting_star:nth-child(33)::before,
	.shooting_star:nth-child(33)::after {
		-webkit-animation-delay: 671ms;
		animation-delay: 671ms;
	}
	.shooting_star:nth-child(34) {
		top: 71%;
		left: 10%;
		-webkit-animation-delay: 3278ms;
		animation-delay: 3278ms;
		opacity: 0.95;
	}
	.shooting_star:nth-child(34)::before,
	.shooting_star:nth-child(34)::after {
		-webkit-animation-delay: 3278ms;
		animation-delay: 3278ms;
	}
	.shooting_star:nth-child(35) {
		top: 23%;
		left: 8%;
		-webkit-animation-delay: 1713ms;
		animation-delay: 1713ms;
		opacity: 0.82;
	}
	.shooting_star:nth-child(35)::before,
	.shooting_star:nth-child(35)::after {
		-webkit-animation-delay: 1713ms;
		animation-delay: 1713ms;
	}
	.shooting_star:nth-child(36) {
		top: 86%;
		left: -1%;
		-webkit-animation-delay: 7582ms;
		animation-delay: 7582ms;
		opacity: 0.57;
	}
	.shooting_star:nth-child(36)::before,
	.shooting_star:nth-child(36)::after {
		-webkit-animation-delay: 7582ms;
		animation-delay: 7582ms;
	}
	.shooting_star:nth-child(37) {
		top: 74%;
		left: 2%;
		-webkit-animation-delay: 5463ms;
		animation-delay: 5463ms;
		opacity: 0.52;
	}
	.shooting_star:nth-child(37)::before,
	.shooting_star:nth-child(37)::after {
		-webkit-animation-delay: 5463ms;
		animation-delay: 5463ms;
	}
	.shooting_star:nth-child(38) {
		top: 48%;
		left: -6%;
		-webkit-animation-delay: 5563ms;
		animation-delay: 5563ms;
		opacity: 0.84;
	}
	.shooting_star:nth-child(38)::before,
	.shooting_star:nth-child(38)::after {
		-webkit-animation-delay: 5563ms;
		animation-delay: 5563ms;
	}
	.shooting_star:nth-child(39) {
		top: 37%;
		left: -3%;
		-webkit-animation-delay: 4526ms;
		animation-delay: 4526ms;
		opacity: 0.85;
	}
	.shooting_star:nth-child(39)::before,
	.shooting_star:nth-child(39)::after {
		-webkit-animation-delay: 4526ms;
		animation-delay: 4526ms;
	}
	.shooting_star:nth-child(40) {
		top: 87%;
		left: 2%;
		-webkit-animation-delay: 1994ms;
		animation-delay: 1994ms;
		opacity: 0.9;
	}
	.shooting_star:nth-child(40)::before,
	.shooting_star:nth-child(40)::after {
		-webkit-animation-delay: 1994ms;
		animation-delay: 1994ms;
	}
	.shooting_star:nth-child(41) {
		top: 66%;
		left: 10%;
		-webkit-animation-delay: 5516ms;
		animation-delay: 5516ms;
		opacity: 0.59;
	}
	.shooting_star:nth-child(41)::before,
	.shooting_star:nth-child(41)::after {
		-webkit-animation-delay: 5516ms;
		animation-delay: 5516ms;
	}
	.shooting_star:nth-child(42) {
		top: 14%;
		left: -4%;
		-webkit-animation-delay: 7060ms;
		animation-delay: 7060ms;
		opacity: 0.69;
	}
	.shooting_star:nth-child(42)::before,
	.shooting_star:nth-child(42)::after {
		-webkit-animation-delay: 7060ms;
		animation-delay: 7060ms;
	}
	.shooting_star:nth-child(43) {
		top: 18%;
		left: 10%;
		-webkit-animation-delay: 3553ms;
		animation-delay: 3553ms;
		opacity: 0.74;
	}
	.shooting_star:nth-child(43)::before,
	.shooting_star:nth-child(43)::after {
		-webkit-animation-delay: 3553ms;
		animation-delay: 3553ms;
	}
	.shooting_star:nth-child(44) {
		top: 70%;
		left: 6%;
		-webkit-animation-delay: 602ms;
		animation-delay: 602ms;
		opacity: 0.64;
	}
	.shooting_star:nth-child(44)::before,
	.shooting_star:nth-child(44)::after {
		-webkit-animation-delay: 602ms;
		animation-delay: 602ms;
	}
	.shooting_star:nth-child(45) {
		top: 25%;
		left: -1%;
		-webkit-animation-delay: 3889ms;
		animation-delay: 3889ms;
		opacity: 0.65;
	}
	.shooting_star:nth-child(45)::before,
	.shooting_star:nth-child(45)::after {
		-webkit-animation-delay: 3889ms;
		animation-delay: 3889ms;
	}
	.shooting_star:nth-child(46) {
		top: 44%;
		left: -8%;
		-webkit-animation-delay: 2293ms;
		animation-delay: 2293ms;
		opacity: 1;
	}
	.shooting_star:nth-child(46)::before,
	.shooting_star:nth-child(46)::after {
		-webkit-animation-delay: 2293ms;
		animation-delay: 2293ms;
	}
	.shooting_star:nth-child(47) {
		top: 54%;
		left: -7%;
		-webkit-animation-delay: 9269ms;
		animation-delay: 9269ms;
		opacity: 0.56;
	}
	.shooting_star:nth-child(47)::before,
	.shooting_star:nth-child(47)::after {
		-webkit-animation-delay: 9269ms;
		animation-delay: 9269ms;
	}
	.shooting_star:nth-child(48) {
		top: 88%;
		left: -2%;
		-webkit-animation-delay: 718ms;
		animation-delay: 718ms;
		opacity: 0.97;
	}
	.shooting_star:nth-child(48)::before,
	.shooting_star:nth-child(48)::after {
		-webkit-animation-delay: 718ms;
		animation-delay: 718ms;
	}
	.shooting_star:nth-child(49) {
		top: 63%;
		left: 4%;
		-webkit-animation-delay: 3439ms;
		animation-delay: 3439ms;
		opacity: 0.84;
	}
	.shooting_star:nth-child(49)::before,
	.shooting_star:nth-child(49)::after {
		-webkit-animation-delay: 3439ms;
		animation-delay: 3439ms;
	}
	.shooting_star:nth-child(50) {
		top: 31%;
		left: 6%;
		-webkit-animation-delay: 4954ms;
		animation-delay: 4954ms;
		opacity: 0.67;
	}
	.shooting_star:nth-child(50)::before,
	.shooting_star:nth-child(50)::after {
		-webkit-animation-delay: 4954ms;
		animation-delay: 4954ms;
	}

	@-webkit-keyframes tail {
		0% {
			width: 0;
		}
		30% {
			width: 100px;
		}
		100% {
			width: 0;
		}
	}

	@keyframes tail {
		0% {
			width: 0;
		}
		30% {
			width: 100px;
		}
		100% {
			width: 0;
		}
	}
	@-webkit-keyframes shining {
		0% {
			width: 0;
		}
		50% {
			width: 30px;
		}
		100% {
			width: 0;
		}
	}
	@keyframes shining {
		0% {
			width: 0;
		}
		50% {
			width: 30px;
		}
		100% {
			width: 0;
		}
	}
	@-webkit-keyframes shooting {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(100vmax);
		}
	}
	@keyframes shooting {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(100vmax);
		}
	}
	@-webkit-keyframes sky {
		0% {
			transform: rotate(45deg);
		}
		100% {
			transform: rotate(405deg);
		}
	}
	@keyframes sky {
		0% {
			transform: rotate(45deg);
		}
		100% {
			transform: rotate(405deg);
		}
	}
</style>

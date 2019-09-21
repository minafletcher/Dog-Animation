var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
//var background = new Image();
//background.src = "groovy2.jpg";
var tailStage = 1;


function drawCircle(x, y, r, color, stroke, strokecolor) {
	context.beginPath();
	context.arc(x, y, r, 0, 2 * Math.PI, false);
	context.fillStyle = color;
	context.fill();
	context.lineWidth = stroke;
	context.strokeStyle = strokecolor;
	context.stroke();
}

function drawEars() {
	context.beginPath();
	context.moveTo(480, 100);
	context.bezierCurveTo(480, 99, 510, 103, 505, 106); // top
	context.bezierCurveTo(508, 106, 512, 135, 510, 146); // side
	context.bezierCurveTo(505, 149, 500, 140, 489, 135); // bottom
	context.fillStyle = "#75543E";
	context.fill();
	context.stroke();
	context.beginPath();
	context.moveTo(400, 100); // other ear
	context.bezierCurveTo(395, 100, 385, 100, 384, 107);
	context.bezierCurveTo(383, 115, 387, 115, 381, 137);
	context.bezierCurveTo(386, 142, 389, 142, 390, 137);
	context.fillStyle = "#75543E";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
	context.beginPath();
	context.moveTo(480, 110);
	context.bezierCurveTo(480, 109, 510, 113, 500, 116); // top
	context.bezierCurveTo(503, 106, 507, 135, 505, 141); // side
	context.bezierCurveTo(505, 144, 500, 135, 489, 130);
	context.fillStyle = "#e8dccc";
	context.fill();
	context.stroke();
	context.beginPath();
	context.moveTo(400, 110); // other ear
	context.bezierCurveTo(400, 105, 390, 105, 389, 112);
	context.bezierCurveTo(383, 115, 387, 115, 381, 137);
	context.bezierCurveTo(386, 142, 389, 142, 390, 137);
	context.fillStyle = "#e8dccc";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
}

function drawBody() {
	context.beginPath();
	context.moveTo(491, 147); // upper back next to ear
	context.bezierCurveTo(500, 162, 520, 162, 520, 162);
	context.bezierCurveTo(550, 170, 640, 130, 640, 130);
	context.bezierCurveTo(760, 100, 780, 190, 780, 210); // tail area
	context.bezierCurveTo(780, 210, 780, 270, 780, 300);
	context.bezierCurveTo(780, 310, 790, 326, 790, 330); // leg
	context.bezierCurveTo(790, 340, 785, 395, 785, 395); // leg
	context.bezierCurveTo(795, 430, 755, 425, 755, 415); // foot
	context.bezierCurveTo(755, 405, 775, 365, 765, 325); // inner far right leg
	context.bezierCurveTo(765, 325, 745, 270, 745, 270); 
	context.bezierCurveTo(720, 230, 680, 230, 650, 260); // stomach
	context.bezierCurveTo(650, 260, 570, 350, 540, 330); // ribs
	context.bezierCurveTo(540, 330, 555, 460, 555, 450); // left inner leg
	context.bezierCurveTo(555, 460, 555, 500, 555, 510); // left inner leg
	context.bezierCurveTo(545, 530, 530, 530, 522, 510); // foot
	context.bezierCurveTo(535, 480, 530, 460, 530, 450);
	context.bezierCurveTo(530, 450, 515, 370, 515, 370);
	context.bezierCurveTo(510, 370, 490, 330, 490, 330);
	
	context.bezierCurveTo(465, 335, 465, 335, 440, 330); // chest
	context.bezierCurveTo(440, 330, 432, 420, 430, 420); // inner far left leg
	context.bezierCurveTo(425, 435, 420, 445, 420, 450);
	context.bezierCurveTo(421, 465, 405, 480, 405, 480);
	context.bezierCurveTo(370, 495, 370, 470, 390, 465); // foot
	context.bezierCurveTo(405, 440, 405, 430, 410, 420);
	context.bezierCurveTo(410, 420, 410, 330, 410, 330); // outer far left leg
	context.bezierCurveTo(400, 320, 390, 290, 390, 290);
	context.bezierCurveTo(385, 270, 400, 220, 395, 199);
	context.bezierCurveTo(383, 175, 390, 137, 390, 137);
	context.bezierCurveTo(390, 140, 390, 110, 400, 100);
	context.bezierCurveTo(420, 80, 460, 80, 480, 100); // top of head
	context.bezierCurveTo(485, 110, 490, 140, 490, 150); // right upper side
	context.fillStyle = "white";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
}

function drawOtherLeg() {
	context.beginPath();
	context.moveTo(705, 239);
	context.bezierCurveTo(700, 239, 685, 280, 690, 280);
	context.bezierCurveTo(685, 280, 700, 315, 700, 325);
	context.bezierCurveTo(700, 325, 677, 360, 680, 380);
	context.bezierCurveTo(680, 400, 635, 405, 660, 370);
	context.bezierCurveTo(680, 340, 675, 310, 665, 295);
	context.bezierCurveTo(665, 295, 650, 260, 650, 260);
	context.bezierCurveTo(650, 200, 705, 239, 705, 239);
	context.fillStyle = "white";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
}

function drawTail1() {
	context.beginPath();
	context.moveTo(730, 133);
	context.bezierCurveTo(731, 134, 741, 134, 740, 130);
	context.bezierCurveTo(740, 130, 705, 52, 710, 30);
	context.bezierCurveTo(720, 35, 745, 90, 765, 135);
	context.bezierCurveTo(765, 135, 760, 145, 749, 145);
	context.closePath();
	context.fillStyle = "white";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
}



function drawTail2() {
	context.beginPath();
	context.moveTo(730, 133);
	context.bezierCurveTo(731, 134, 741, 134, 740, 130);
	context.bezierCurveTo(750, 130, 735, 52, 750, 20);
	context.bezierCurveTo(760, 35, 765, 90, 765, 135);
	context.bezierCurveTo(765, 135, 760, 145, 749, 145);
	context.closePath();
	context.fillStyle = "white";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
}



function drawTail3() {
	context.beginPath();
	context.moveTo(730, 133);
	context.bezierCurveTo(730, 133, 740, 130, 740, 130);
	context.bezierCurveTo(760, 130, 775, 52, 810, 20);
	context.bezierCurveTo(810, 35, 800, 90, 765, 135);
	context.bezierCurveTo(765, 135, 760, 145, 749, 145);
	context.closePath();
	context.fillStyle = "white";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
}



function drawTail4() {
	context.beginPath();
	context.moveTo(730, 133);
	context.bezierCurveTo(730, 133, 740, 130, 740, 130);
	context.bezierCurveTo(760, 125, 815, 52, 835, 45);
	context.bezierCurveTo(850, 40, 830, 80, 765, 135);
	context.bezierCurveTo(765, 135, 760, 140, 749, 145);
	context.closePath();
	context.fillStyle = "white";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
}



function drawTail5() {
	context.beginPath();
	context.moveTo(730, 133);
	context.bezierCurveTo(730, 133, 740, 130, 740, 130);
	context.bezierCurveTo(760, 120, 775, 102, 870, 100);
	context.bezierCurveTo(810, 125, 800, 120, 765, 135);
	context.bezierCurveTo(765, 135, 760, 135, 749, 145);
	context.closePath();
	context.fillStyle = "white";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
}



function drawTail6() {
	context.beginPath();
	context.moveTo(730, 133);
	context.bezierCurveTo(730, 130, 740, 127, 740, 127);
	context.bezierCurveTo(760, 120, 795, 107, 870, 120);
	context.bezierCurveTo(870, 130, 820, 125, 765, 135);
	context.bezierCurveTo(765, 135, 760, 135, 749, 145);
	context.closePath();
	context.fillStyle = "white";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
}



function drawTail7() {
	context.beginPath();
	context.moveTo(730, 133);
	context.bezierCurveTo(730, 130, 740, 127, 740, 127);
	context.bezierCurveTo(760, 120, 850, 127, 870, 150);
	context.bezierCurveTo(870, 150, 820, 145, 765, 140);
	context.bezierCurveTo(765, 140, 760, 140, 749, 145);
	context.closePath();
	context.fillStyle = "white";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
}

function drawTail8() {
	context.beginPath();
	context.moveTo(730, 133);
	context.bezierCurveTo(730, 130, 740, 127, 740, 127);
	context.bezierCurveTo(760, 120, 850, 147, 870, 170);
	context.bezierCurveTo(850, 175, 800, 150, 765, 145);
	context.bezierCurveTo(765, 145, 755, 140, 749, 145);
	context.closePath();
	context.fillStyle = "white";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
}


function drawEyes() {
	context.beginPath();
	context.moveTo(407, 126);
	context.bezierCurveTo(412, 120, 416, 120, 421, 126);
	context.bezierCurveTo(416, 129, 412, 129, 407, 126);
	context.closePath();
	context.fillStyle = "#96af7b";
	context.fill();
	context.stroke();
	context.beginPath();
	context.moveTo(462, 126);
	context.bezierCurveTo(467, 122, 472, 122, 475, 127);
	context.bezierCurveTo(469, 128, 465, 128, 462, 126);
	context.fillStyle = "#96af7b";
	context.fill();
	context.stroke();
	// pupils
	drawCircle(414, 125, 3, "black", 1, "black");
	drawCircle(415, 124, 2, "white", 1, "black");
	drawCircle(468, 125.5, 2, "black", 1, "black");
	drawCircle(470, 125.5, 2, "white", 1, "black");
}

function drawEyes2() {
	context.beginPath();
	context.moveTo(407, 126);
	context.bezierCurveTo(412, 120, 416, 120, 421, 126);
	context.stroke();
	context.beginPath();
	context.moveTo(462, 126);
	context.bezierCurveTo(467, 122, 472, 122, 475, 127);
	context.stroke();
}

function drawNose() {
	context.beginPath();
	context.moveTo(423, 155);
	context.bezierCurveTo(427, 145, 445, 145, 450, 155);
	context.bezierCurveTo(450, 155, 450, 170, 436, 173);
	context.bezierCurveTo(423, 170, 423, 155, 423, 155);
	context.closePath();
	context.fillStyle = "#845b5b";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
	drawNoseFeatures();
}

function drawMouth() {
	context.beginPath();
	context.moveTo(421, 185);
	context.bezierCurveTo(428, 180, 446, 180, 452, 185);
	context.bezierCurveTo(460, 187, 470, 175, 470, 175);
	context.bezierCurveTo(475, 175, 468, 195, 468, 195);
	context.bezierCurveTo(468, 195, 455, 207, 455, 207);
	context.bezierCurveTo(445, 220, 430, 220, 423, 207);
	context.bezierCurveTo(405, 207, 410, 175, 410, 175);
	context.bezierCurveTo(410, 175, 412, 185, 421, 185);
	context.closePath();
	context.fillStyle = "#ffcccc";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
}

function drawTeeth() {
	context.beginPath();
	context.moveTo(446, 205);
	context.bezierCurveTo(448, 195, 448, 195, 450, 205);
	context.bezierCurveTo(450, 215, 423, 215, 423, 205);
	context.bezierCurveTo(425, 195, 425, 195, 427, 205);
	context.bezierCurveTo(427, 209, 446, 209, 446, 205);
	context.closePath();
	context.fillStyle = "white";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
}

function drawFace() {
	drawNose();
	drawMouth();
	drawTongue();
	drawTeeth();
}

function drawFacialColor() {
	context.beginPath();
	context.moveTo(475, 95);
	context.bezierCurveTo(425, 100, 455, 150, 470, 187);
	context.bezierCurveTo(477, 183, 490, 150, 490, 150);
	context.bezierCurveTo(485, 110, 490, 140, 480, 100);
	context.closePath();
	context.fillStyle = "#e8dccc";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
	context.beginPath();
	context.moveTo(420, 88);
	context.bezierCurveTo(465, 100, 400, 170, 410, 185);
	context.bezierCurveTo(405, 175, 395, 175, 390, 160);
	context.bezierCurveTo(387, 160, 390, 137, 390, 137);
	context.bezierCurveTo(390, 140, 390, 110, 400, 100);
	context.bezierCurveTo(410, 90, 420, 88, 420, 88);
	context.fillStyle = "#e8dccc";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
	context.beginPath();
	context.moveTo(400, 100);
	context.bezierCurveTo(400, 100, 420, 95, 430, 131);
	context.bezierCurveTo(430, 131, 421, 150, 415, 150);
	context.bezierCurveTo(415, 150, 425, 134, 420, 129);
	context.bezierCurveTo(420, 129, 400, 129, 390, 134);
	context.bezierCurveTo(390, 140, 390, 110, 400, 100);
	context.fillStyle = "#99743e";
	context.fill();
	context.lineWidth = 0.5;
	context.stroke();
	drawCircle(470, 125, 9, "#99743e", 0.5, "black");
}

function drawNoseFeatures() {
	drawCircle(430, 158, 3, "#261d20", 1, "black");
	drawCircle(443, 158, 3, "#261d20", 1, "black");
}

function drawTongue() {
	context.beginPath();
	context.moveTo(452, 185);
	context.bezierCurveTo(452, 220, 421, 220, 421, 185);
	context.bezierCurveTo(428, 180, 446, 180, 452, 185);
	context.closePath();
	context.fillStyle = "#82364c";
	context.fill();
	context.stroke();
	context.beginPath();
	context.moveTo(436, 180);
	context.bezierCurveTo(436, 180, 436, 200, 436, 200);
	context.closePath();
	context.stroke();
}

function drawSpots() {
	drawCircle(600, 200, 3, "#e8dccc", 0.5, "black");
	drawCircle(685, 150, 2, "#e8dccc", 0.5, "black");
	drawCircle(468, 300, 2, "#e8dccc", 0.5, "black");
	drawCircle(712, 156, 3, "#e8dccc", 0.5, "black");
	drawCircle(732, 213, 3, "#e8dccc", 0.5, "black");
	drawCircle(549, 450, 3, "#e8dccc", 0.5, "black");
	drawCircle(657, 245, 3, "#e8dccc", 0.5, "black");
	drawCircle(475, 283, 3, "#e8dccc", 0.5, "black");
	drawCircle(485, 256, 3, "#e8dccc", 0.5, "black");
	drawCircle(548, 245, 3, "#e8dccc", 0.5, "black");
	drawCircle(458, 135, 3, "#e8dccc", 0.5, "black");
	drawCircle(667, 286, 2, "#75543E", 0.5, "black");
	drawCircle(712, 184, 2, "#75543E", 0.5, "black");
	drawCircle(720, 173, 2, "#75543E", 0.5, "black");
	drawCircle(702, 196, 2, "#75543E", 0.5, "black");
	drawCircle(708, 163, 3, "#75543E", 0.5, "black");
	drawCircle(706, 163, 2, "#75543E", 0.5, "black");
	drawCircle(600, 200, 3, "#75543E", 0.5, "black");
	drawCircle(745, 185, 1, "#75543E", 0.5, "black");
	drawCircle(712, 200, 1, "#75543E", 0.5, "black");
	drawCircle(767, 230, 1, "#75543E", 0.5, "black");
	drawCircle(760, 235, 2, "#75543E", 0.5, "black");
	drawCircle(769, 254, 1, "#75543E", 0.5, "black");
	drawCircle(776, 330, 2, "#75543E", 0.5, "black");
	drawCircle(767, 314, 1, "#75543E", 0.5, "black");
	drawCircle(550, 245, 2, "#75543E", 0.5, "black");
	drawCircle(575, 269, 2, "#75543E", 0.5, "black");
	drawCircle(690, 175, 12, "#e8dccc", 0.5, "black");
	drawCircle(685, 178, 10, "#75543E", 0.5, "black");
	drawCircle(400, 135, 2, "#75543E", 0.5, "black");
	drawCircle(410, 145, 2, "#75543E", 0.5, "black");
	drawCircle(455, 140, 3, "#75543E", 0.5, "black");
	drawCircle(455, 110, 2, "#75543E", 0.5, "black");
	drawCircle(470, 114, 3, "#75543E", 0.5, "black");
	drawCircle(460, 150, 2, "#75543E", 0.5, "black");
	drawCircle(420, 400, 3, "#75543E", 0.5, "black");
	drawCircle(417, 390, 2, "#75543E", 0.5, "black");
	drawCircle(417, 360, 2, "#75543E", 0.5, "black");
	drawCircle(417, 360, 2, "#75543E", 0.5, "black");
	drawCircle(410, 107, 3, "#e8dccc", 0.5, "black");
	drawCircle(425, 350, 3, "#75543E", 0.5, "black");
	drawCircle(530, 400, 4, "#e8dccc", 0.5, "black");
	drawCircle(540, 440, 3, "#e8dccc", 0.5, "black");
	drawCircle(690, 300, 2, "#75543E", 0.5, "black");
	drawCircle(680, 265, 2, "#75543E", 0.5, "black");
	drawCircle(680, 290, 3, "#e8dccc", 0.5, "black");
	drawCircle(670, 275, 2, "#75543E", 0.5, "black");
	drawCircle(720, 200, 2, "#75543E", 0.5, "black");
	drawCircle(750, 230, 2, "#75543E", 0.5, "black");

}

function drawCollar() {
	context.beginPath();
	context.moveTo(460, 240);
	context.bezierCurveTo(460, 240, 480, 220, 480, 220);
	context.bezierCurveTo(478, 222, 478, 230, 482, 232);
	context.bezierCurveTo(482, 232, 465, 251, 465, 251);
	context.bezierCurveTo(465, 251, 465, 240, 460, 240);
	context.closePath();
	context.fillStyle = "black";
	context.fill();
	context.stroke();
	context.beginPath();
	context.moveTo(460, 240);
	context.bezierCurveTo(450, 245, 445, 242, 440, 243);
	context.bezierCurveTo(440, 248, 455, 255, 465, 251);
	context.bezierCurveTo(465, 251, 465, 240, 460, 240);
	context.closePath();
	//var pat = context.createPattern(background, "repeat");
	context.fillStyle = "#f46666";
	context.fill();
	context.stroke();
	context.beginPath();
	context.moveTo(480, 220);
	context.bezierCurveTo(480, 220, 485, 212, 485, 212);
	context.bezierCurveTo(490, 212, 482, 232, 482, 232);
	context.bezierCurveTo(478, 230, 478, 222, 480, 220);
	context.closePath();
	context.fillStyle = "#f46666";
	context.fill();
	context.stroke();
}

function drawDog(tail) {
//drawBackground();
drawOtherLeg();
drawBody();
drawEars();
drawFacialColor();
drawFace();
drawSpots();
drawCollar();
if (tail == 0 ) {
	drawEyes2();
}
if (tail == 1) {
	drawTail1();
	drawEyes2();
}
if (tail == 2) {
	drawTail2();
	drawEyes();
}
if (tail == 3) {
	drawTail3();
	drawEyes();
}
if (tail == 4) {
	drawTail4();
	drawEyes();
}
if (tail == 5) {
	drawTail5();
	drawEyes();
}
if (tail == 6) {
	drawTail6();
	drawEyes();
}
if (tail == 7) {
	drawTail7();
	drawEyes();
}
if (tail == 8) {
	drawTail8();
	drawEyes2();
}
if (tail == 9) {
	drawTail7();
	drawEyes();
}
if (tail == 10) {
	drawTail6();
	drawEyes();
}
if (tail == 11) {
	drawTail5();
	drawEyes();
}
if (tail == 12) {
	drawTail4();
	drawEyes();
}
if (tail == 13) {
	drawTail3();
	drawEyes();
}
if (tail == 14) {
	drawTail2();
	drawEyes();
}
}

var tail_speed = 10;
var tail = 5;

function reset() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawDog(0);
}
function wagTail() {
	tail_speed+=tail;

	reset();

	if(tail_speed == 15) {
		drawDog(1);
		}
	if(tail_speed == 20) {
		drawDog(2);
	}
	if(tail_speed == 25) {
		drawDog(3);
	}
	if(tail_speed == 30) {
		drawDog(4);
	}
	if(tail_speed == 35) {
		drawDog(5);
	}
	if(tail_speed == 40) {
		drawDog(6);
	}
	if(tail_speed == 45) {
		drawDog(7);
	}
	if(tail_speed == 50) {
		drawDog(8);
	}
	if(tail_speed == 55) {
		drawDog(9);
	}
	if(tail_speed == 60) {
		drawDog(10);
	}
	if(tail_speed == 65) {
		drawDog(11);
	}
	if(tail_speed == 70) {
		drawDog(12);
	}
	if(tail_speed == 75) {
		drawDog(13);
	}
	if(tail_speed == 80) {
		drawDog(14);
	}
	if(tail_speed == 85) {
		drawDog(1);
		tail_speed = 15;
	}
}

dogTimer = setInterval(wagTail, 175);

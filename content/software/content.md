## Software

Hiwr is developed using **<abbr title="Robotics Operating System">[ROS](http://www.ros.org/)</abbr>** and **GNU/Linux**. 

**ROS** is a set of software libraries and tools that help you build robot applications.

Combined with following bricks, it becomes easy to build various Hiwr scenarios.

### Basic bricks

<div class="row">
<div class="brick col-md-4">
	<h4>Motor controller</h4>
	<p>This module allows to drive the two motors and move the head.</p>
	<span class="github-link"><a href="https://github.com/hiwr/dynamixel_motor"><i class="fa fa-github"></i></a></span>
</div>
<div class="brick col-md-4">
	<h4>Screen controller</h4>
	<p>This module allows to easily display text, images, video on the screen.</p>
	<span class="github-link"><a href="https://github.com/hiwr/hiwr_screen"><i class="fa fa-github"></i></a></span>
</div>
<div class="brick col-md-4">
	<h4>Touch screen</h4>
	<p>This module allows to get information about user's interactions with the touch screen.</p>
	<span class="github-link"><a href="https://github.com/hiwr/hiwr_touchscreen"><i class="fa fa-github"></i></a></span>
</div>
<div class="brick col-md-4">
	<h4>Camera controller</h4>
	<p>This module allows to "stream" camera images.</p>
	<span class="github-link"><a href="https://github.com/hiwr/hiwr_camera_controller"><i class="fa fa-github"></i></a></span>
</div>
</div>


### Advanced bricks

<div class="row">
<div class="brick col-md-3">
	<h4>QR/Barcode scanner</h4>
	<p>This allows Hiwr to read QR code and bare code. It depends on <em>Camera controller</em>.</p>
	<span class="github-link"><a href="https://github.com/hiwr/hiwr_code_scanner"><i class="fa fa-github"></i></a></span>
</div>

<div class="brick col-md-3">
	<h4>OpenCV detector</h4>
	<p>Based on images provided by a <em>Camera controller</em> and a cascade descriptor, it sends ROI messages that can be consumed by other modules. It is based on <a href="http://opencv.org/" target="_blank">OpenCV</a> library.</p>
	<span class="github-link"><a href="https://github.com/hiwr/hiwr_opencv_detector"><i class="fa fa-github"></i></a></span>
</div>

<div class="brick col-md-3">
	<h4>Tracker</h4>
	<p>This allows Hiwr to track objects or faces. It consumes ROI messages and send messages to the <em>Motor controller</em> module.</p>
	<span class="github-link"><a href="https://github.com/hiwr/hiwr_tracker"><i class="fa fa-github"></i></a></span>
</div>

<div class="brick col-md-3">
	<h4>Tired</h4>
	<p>When putting hiwr in the black, hiwr is becoming tired and sleepy. After a second, hiwr will be asleep until the thing in front of its camera is off.</p>
	<span class="github-link"><a href="https://github.com/hiwr/hiwr_tired"><i class="fa fa-github"></i></a></span>
</div>
</div>

### Scenarios

Here are some simple scenarios based on previous bricks.
<div class="row">
<div class="brick col-md-3">
	<h4>Simple example</h4>
	<p>A simple example involving:
	  <ul>
	    <li>Screen controller</li>
		<li>Motor controller</li>
		<li>Camera controller</li>
		<li>OpenCV detector</li>
		<li>Tracker module</li>
	    <li>Touch screen</li>
		<li>Tired</li>
	  </ul>
	</p>
	<span class="github-link"><a href="https://github.com/hiwr/hiwr_simple_example"><i class="fa fa-github"></i></a></span>
</div>
</div>
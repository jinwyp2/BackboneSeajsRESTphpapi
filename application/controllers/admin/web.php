<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

	class Web extends CI_Controller {

		function __construct()
		{
			parent::__construct();
		}

		function index()
		{
			$this->load->helper('url');

			$this->load->view('websiteadmin');
		}
			
		
	}

?>
<%@ Page Language="C#" MasterPageFile="dashboard.master" AutoEventWireup="true"%>

<asp:Content ID="PlaceHolderPageTitle" runat="server" ContentPlaceHolderID="PlaceHolderPageTitle">
NAEP Dashboards - Achievement Gaps
</asp:Content>

<asp:Content ID="PlaceHolderAdditionalPageHead" runat="server" ContentPlaceHolderID="PlaceHolderAdditionalPageHead">
<meta name="keywords" content="achievement gaps" />
<meta name="description" content="NAEP Dashboards - Achievement Gaps" />
<meta name="DC.Description" content="NAEP Dashboards - Achievement Gaps" />
<meta name="DC.Title" content="NAEP Dashboards - Achievement Gaps" />

<script src="/js/autocomplete_dropdown.js"></script>
<script src="js/ets_util.js"></script>
<script src="js/private_schools_dashboard.js"></script>
<link rel="stylesheet" type="text/css" href="css/styles.css" />
</asp:Content>

<asp:Content ID="PlaceHolderMain" runat="server" ContentPlaceHolderID="PlaceHolderMain">
<div id="pageContentContainer" class="nrc_pageContentContainer">
	<div id="pageContent" class="nrc_pageContent">
		<!--  B  E  G  I  N    C  O  N  T  E  N  T  -->
		<article class="section__inner">
			<div class="section__title"></div>
			<div class="section__controls"></div>
			<div class="section__subtitle"></div>
			<div class="share-it">
				<div class="chart__share">
					<a href="#">Click to expand</a>
					<div class="share__drawer" style="display: block;">
						<a href="#" class="share__facebook">Facebook</a>
						<a href="#" class="share__twitter">Twitter</a>
						<a class="share__email" href="#">Email</a>
						<a class="share__link" href="#">Permalink</a>
						<div class="share__permalink-popup">
							<input type="text">
						</div>
					</div>
				</div>
			</div>
			<div class="section__commentary"><p>Lorem ipsum dolor sit amet, a rhoncus pede mauris, sem ut nulla ipsum suspendisse quisque, mi ut sed eget et. Nulla interdum erat sapien vel. Auctor ac dictum tincidunt maecenas, nibh in elit, ultrices urna, hendrerit nulla ipsum. Mattis eu integer quis pede faucibus auctor, hendrerit nec venenatis duis orci erat nec, sit ipsum nullam iaculis morbi sed, hac placerat eu urna vitae sed fringilla. Nec mi, dictumst magna a dapibus amet, egestas vel lacinia purus tortor natoque pede, eleifend ipsum feugiat mauris dolor ut tellus. A quis vivamus aenean, tempus porttitor, ut a ut id vestibulum nulla magna. Justo in suspendisse metus ac bibendum a.</p></div>
			<div class="section__contents">
				<h3>Overall Scale Score Results</h3>
				<section class="criteria">
					<div class="select-options variables" role="combobox application" aria-expanded="false" aria-disabled="false" aria-required="false">
						<label>Student Group:</label>
						<div role="textbox" aria-readonly="true" class="select">All Students</div>
						<div role="listbox" tabindex="-1" aria-multiselectable="false" class="dropdown-menu scrollable-menu">
							<!-- <div>All students</div> -->
							<div class="menu-section-header gender">Gender</div>
							<div class="menu-section gender">
								<div>Male</div>
								<div>Female</div>
							</div>
							<div class="menu-section-header race">Race</div>
							<div class="menu-section race">
								<div>White</div>
								<div>Black</div>
								<div>Hispanic</div>
								<div>Asian</div>
							</div>
						</div>
					</div>
					<div class="select-options stat-types" role="combobox application" aria-expanded="false" aria-disabled="false" aria-required="false">
						<label>achievement level&#58;</label>
						<div role="textbox" aria-readonly="true" class="select">At or above <em>Proficient</em></div>
						<div role="listbox" tabindex="-1" aria-multiselectable="false" class="dropdown-menu scrollable-menu">
							<div class="menu-section-header achievement-level">Achievement Level</div>
							<div class="menu-section achievement-level">
								<div>At <em>Advanced</em></div>
								<div>At or above <em>Proficient</em></div>
								<div>At or above <em>Basic</em></div>
							</div>
							<div class="menu-section-header average-scores">Changes in Average Scores</div>
							<div class="menu-section states average-scores"><div>Compared to base year</div>
							<div>Compared to most recent year</div>
						</div>
					</div>
				</section><!-- end criteria section -->
				<section class="block-container" id="overall-results">
					<div class="block music">
						<input id="block-music" type="checkbox" name="blocks">
						<label for="block-music">Arts: Music (0 - 300)</label>
						<div class="block-content">
							<div class="bar-charts"></div>
							<div class="customize">
								<h5>MAKE SELECTIONS:</h5> 
								<i class="fa fa-times" aria-hidden="true"></i><span class="option-1"> Private</span> 
								<i class="fa fa-window-close" aria-hidden="true"></i><span class="option-2"> Public</span>
								<i class="fa fa-window-close" aria-hidden="true"></i><span class="option-3"> Catholic</span>
								<i class="fa fa-window-close" aria-hidden="true"></i><span class="option-4"> Charter</span>
							</div>
						</div>
					</div>
						<div class="block visual-arts">
						<input id="block-arts" type="checkbox" name="blocks">
						<label for="block-arts">Arts: Visual Arts (0 - 300)</label>
						<div class="block-content">
							<div class="bar-charts"></div>
							<div class="">MAKE SELECTIONS: <span>X</span><span>X</span><span>X</span><span>X</span></div>
						</div>
					</div>
					<div class="block civics">
						<input id="block-civics" type="checkbox" name="blocks">
						<label for="block-civics">Civics (0 - 300)</label>
						<div class="block-content">
							<div class="bar-charts"></div>
							<div class="">MAKE SELECTIONS: <span>X</span><span>X</span><span>X</span><span>X</span></div>
						</div>
					</div>
					<div class="block economics">
						<input id="block-economics" type="checkbox" name="blocks">
						<label for="block-economics">Economics (0 - 300)</label>
						<div class="block-content">
							<div class="bar-charts"></div>
							<div class="">MAKE SELECTIONS: <span>X</span><span>X</span><span>X</span><span>X</span></div>
						</div>
					</div>
				    <div class="block geography">
				    	<input id="block-geography" type="checkbox" name="blocks">
				    	<label for="block-geography">Geography (0 - 500)</label>
				    	<div class="block-content">
				    		<div class="bar-charts"></div>
				    		<div class="">MAKE SELECTIONS: <span>X</span><span>X</span><span>X</span><span>X</span></div>
				    	</div>
				    </div>
				    <div class="block mathematics">
				    	<input id="block-mathematics" type="checkbox" name="blocks">
				    	<label for="block-mathematics">Mathematics (0 - 500)</label>
				    	<div class="block-content">
				    		<div class="bar-charts"></div>
				    		<div class="">MAKE SELECTIONS: <span>X</span><span>X</span><span>X</span><span>X</span></div>
				    	</div>
				    </div>
				    <div class="block reading">
				    	<input id="block-reading" type="checkbox" name="blocks">
				    	<label for="block-reading">Reading (0 - 500)</label>
				    	<div class="block-content">
				    		<div class="bar-charts"></div>
				    		<div class="">MAKE SELECTIONS: <span>X</span><span>X</span><span>X</span><span>X</span></div>
				    	</div>
				    </div>
				    <div class="block science">
				    	<input id="block-science" type="checkbox" name="blocks">
				    	<label for="block-science">Science (0 - 300)</label>
				    	<div class="block-content">
				    		<div class="bar-charts"></div>
				    		<div class="">MAKE SELECTIONS: <span>X</span><span>X</span><span>X</span><span>X</span></div>
				    	</div>
				    </div>
				    <div class="block history">
						<input id="block-history" type="checkbox" name="blocks">
						<label for="block-history">U.S. History (0 - 500)</label>
						<div class="block-content">
							<div class="bar-charts"></div>
							<div class="">MAKE SELECTIONS: <span>X</span><span>X</span><span>X</span><span>X</span></div>
						</div>
					</div>
					<div class="block tel">
						<input id="block-tel" type="checkbox" name="blocks">
						<label for="block-tel">TEL (0 - 300)</label>
						<div class="block-content">
							<div class="bar-charts"></div>
							<div class="">MAKE SELECTIONS: <span>X</span><span>X</span><span>X</span><span>X</span></div>
						</div>
					</div>
				</section><!-- end accordion section -->
				<section id="demographic-group" class="contrast-block">
					<div class="inner-block">
						<h3>Percentage Distribution by Demographic Group</h3>
						<div class="criteria"></div>
					</div>
				</section>
				<section id="contextual-variable">
					<div class="inner-block">
						<h3>Percentage Distribution by Contextual Variable</h3>
						<div class="criteria"></div>
					</div>
				</section>
				<section id="item-map" class="contrast-block">
					<div class="inner-block">
						<h3>Item Map</h3>
						<div class="criteria"></div>
					</div>
				</section>
				<section id="" class="color-block">
					<div class="inner-block">
						<h3>Section to be Named</h3>
					</div>
				</section>
			</div><!-- end section__contents div -->
		</article><!-- end section__inner div -->
		<!--  E  N  D    C  O  N  T  E  N  T  -->
	</div>
</div>
</asp:Content>

<asp:Content ID="PlaceHolderPageHead" runat="server" ContentPlaceHolderID="PlaceHolderPageHead">
<script src="/WebResource.axd?d=CIsD_jQ5qiPWKwMMaWrMOBA4FAIj0JcHD_YCbIuXPj2T-eY9VHrfMJvvHtL937JWIa2YFzU_EOh1lBkanB4pCw-RpTJ5QDChFr0qQeEISUQ1&amp;t=636160660665894255" type="text/javascript"></script>
</asp:Content>

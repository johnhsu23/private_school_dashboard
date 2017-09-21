<%@ Page Language="C#" MasterPageFile="~/NRCRedesign.master" AutoEventWireup="true"%>

<asp:Content ID="PlaceHolderPageTitle" runat="server" ContentPlaceHolderID="PlaceHolderPageTitle">
NAEP dashboards - achievement_gaps
</asp:Content>

<asp:Content ID="PlaceHolderAdditionalPageHead" runat="server" ContentPlaceHolderID="PlaceHolderAdditionalPageHead">
<meta name="keywords" content="achievement_gaps" />
<meta name="description" content="NAEP dashboards - achievement_gaps" />
<meta name="DC.Description" content="NAEP dashboards - achievement_gaps" />
<meta name="DC.Title" content="NAEP dashboards - achievement_gaps" />

<style>
.accordion {
	padding-bottom: 6px;
	margin: 0px;
}
.accordion p {
	margin: 0 0 0 0 !important;
}
.accordion h3 {
	font-family: 'Open Sans', sans-serif;
	font-size: 1.3em;
	font-weight: bold;
	color: #fff;
	padding: 15px 0 4px 35px;
	margin-bottom: 0px !important;
	margin-top: 0px !important;
}
.accordion .img-div {	
	text-align: center;
}
.accordion img {
	width: 800px;
	height: 240px;
	padding-top: 6px;
}
.ui-accordion-2-panel-0 {
	margin-left: 10px;
}
.ui-accordion-header {
	background-color: #00a795;
	width: 100%;
	height: 55px;
	cursor: pointer;	
}
.ui-accordion-header-icon {
	margin: 11px 9px 11px 11px;
}
.ui-state-active {
	background: url('/subject/_commonobjects/images/minus.png') #00a795 13px no-repeat;
}
.ui-corner-all {
	background: url('/subject/_commonobjects/images/plus.png') #c6912c 13px no-repeat;
}
#gapKey {
	text-align: center;
}
#imgGapKey {
	padding: 13px 0 0 0;
}
</style>
<script type="text/javascript">	
	$j(document).ready(function(){
			bindAccordion();
	});
	function bindAccordion()
	{	
		jQuery( ".accordion" ).accordion({
			collapsible: true,
			active: false,
			animate: {duration: 500}
		});
		// open the first item by default
		jQuery( ".accordion-default" ).accordion("activate", 0);
	}
</script>
</asp:Content>

<asp:Content ID="PlaceHolderMain" runat="server" ContentPlaceHolderID="PlaceHolderMain">
<div id="pageContentContainer" class="nrc_pageContentContainer">	
		
		<div id="pageContent" class="nrc_pageContent">
			
				<div id="PubContent">
					<div id="contentWrapper" class="single-column">
						<div class="row top-bluerow">
							<div class="col-xs-9">
								<!--BEGIN CONTENT-->
								<p>​​​​Achievement Gaps Dashboard​​</p>							
								<!--END CONTENT-->
							</div>
							<div class="social col-xs-3">
								<!--<div class="icon-email">
									<a href="mailto:?to=&amp;subject=NAEP Reading and Mathematics 2015 Results&amp;body=http://www.nationsreportcard.gov/reading_math_2015/">
										<img src="/adminonly/themes/redesign_2015/images/spacer.gif" alt="Email" />
									</a>
								</div>-->
								<div class="icon-print">
									<a href="javascript:window.print();">
										<img src="/adminonly/themes/redesign_2015/images/spacer.gif" alt="Print" />
									</a>
								</div>
								<!--<div class="icon-twitter">
									<a href="https://twitter.com/NAEP_NCES" target="_blank">
										<img src="/adminonly/themes/redesign_2015/images/spacer.gif" alt="Twitter" />
									</a>
								</div>
								<div class="icon-facebook">
									<a href="https://www.facebook.com/NationalAssessmentofEducationalProgress" target="_blank">
										<img src="/adminonly/themes/redesign_2015/images/spacer.gif" alt="Facebook" />
									</a>
								</div>-->
							</div>
						</div>
						<div class="row main-content">
							<div class="col-xs-12">
								<!--BEGIN CONTENT-->
								<div class="chart__share__achievementgap"><div class="chart__share chart__share2"> 
      <a href="#">Click to expand</a>
      <div class="share__drawer" style="display&#58;block;"> 
         <a href="#" class="share__facebook">Facebook</a><a href="#" class="share__twitter">Twitter</a><a class="share__email" href="#">Email</a><a class="share__link" href="#">Permalink</a> 
         <div class="share__permalink-popup">
            <input type="text" />
         </div></div></div><div style="margin-left&#58;10px;"><p> The charts on this page show achievement gaps, which are&#160;significant differences in assessment scores between two groups of students (for example, male and female students, White and Black students, or White and Hispanic students). Over the years, achievement gaps may increase, narrow, or remain the same depending on the amount of change in the average scores for t​​he two student groups. Find out more about 
         <a href="https&#58;//nces.ed.gov/nationsreportcard/studies/gaps/"><strong>achievement gaps</strong></a>. </p></div></div><div class="accordion accordion-default"><h3>CIVICS</h3><div class="img-div"> 
      <img src="/subject/gaps/images/gaps_civics.png" alt="For Civics, the achievement gap between White and Black students narrowed at grade 4 between 1998 and 2010, showed no significant change at grade 8 between 1998 and 2014, and showed no significant change at grade 12 between 1998 and 2010. The achievement gap between White and Hispanic students narrowed at grades 4 and 12 between 1998 and 2010, and narrowed at grade 8 between 1998 and 2014.The achievement gap between female and male students widened at grade 4 between 1998 and 2010, showed no significant change at grade 8 between 1998 and 2014, and showed no significant change at grade 12 between 1998 and 2010. The achievement gap between students not eligible for the National School Lunch Program and those eligible for the program showed no significant change at grade 4 between 2006 and 2010, and no significant change at grade 8 between 2006 and 2014. Data is not available for this student group at grade 12." />&#160;​ </div></div><div class="accordion"><h3>ECONOMICS</h3><div class="img-div"> 
      <img src="/subject/gaps/images/gaps_economics.png" alt="For Economics, the achievement gaps between White and Black students, White and Hispanic Students, and male and female students showed no significant change at grade 12 between 2006 and 2012. Data regarding eligibility for the National School Lunch Program is not available at grade 12. The assessment was not administered at grades 4 and 8; therefore, no data is provided for those grades." />&#160; </div></div><div class="accordion"><h3>GEOGRAPHY</h3><div class="img-div"> 
      <img src="/subject/gaps/images/gaps_geography.png" alt="For Geography, the achievement gap between White and Black students narrowed at grade 4 between 1994 and 2010, narrowed at grade 8 between 1994 and 2014, and showed no significant change at grade 12 between 1994 and 2010. The achievement gap between White and Hispanic students narrowed at grade 4 between 1994 and 2010, narrowed at grade 8 between 1994 and 2014, and showed no significant change at grade 12 between 1994 and 2010.The achievement gap between male and female students showed no significant change at grades 4 and 12 between 1994 and 2010, and showed no significant change at grade 8 between 1994 and 2014. The achievement gap between students not eligible for the National School Lunch Program and those eligible for the program showed no significant change at grade 8 between 2010 and 2014. No data for this gap is available for grades 4 and 12." />&#160;​ </div></div><div class="accordion"><h3>MATHEMATICS</h3><div class="img-div"> 
      <img src="/subject/gaps/images/gaps_math.png" alt="For Mathematics, the achievement gap between White and Black students narrowed at grade 4 between 1990 and 2015, showed no significant change at grade 8 between 1990 and 2015, and showed no significant change at grade 12 between 2005 and 2015. The achievement gap between White and Hispanic students showed no significant change at grades 4 and 8 between 1990 and 2015, and showed no significant change at grade 12 between 2005 and 2015. The achievement gap between male and female students showed no significant change at grades 4 and 8 between 1990 and 2015, and showed no significant change at grade 12 between 2005 and 2015. The achievement gap between students not eligible for the National School Lunch Program and those eligible for the program showed no significant change at grades 4 and 8 between 2003 and 2015, and showed no significant change at grade 12 between 2005 and 2015." />&#160; </div></div><div class="accordion"><h3>READING</h3><div class="img-div"> 
      <img src="/subject/gaps/images/gaps_reading.png" alt="For Reading, the achievement gap between White and Black students narrowed at grade 4 between 1992 and 2015, showed no significant change at grade 8 between 1992 and 2015, and widened at grade 12 between 1992 and 2015. The achievement gap between White and Hispanic students showed no significant change at grade 4 between 1992 and 2015, narrowed at grade 8 between 1992 and 2015, and showed no significant change at grade 12 between 1992 and 2015. The achievement gap between female and male students showed no significant change at grade 4 between 1992 and 2015, narrowed at grade 8 between 1992 and 2015, and showed no significant change at grade 12 between 1992 and 2015. The achievement gap between students not eligible for the National School Lunch Program and those eligible for the program showed no significant change at grades 4 and 8 between 2003 and 2015, and widened at grade 12 between 2005 and 2015." />&#160; </div></div><div class="accordion"><h3>SCIENCE</h3><div class="img-div"> 
      <img src="/subject/gaps/images/gaps_science.png" alt="For Science, the achievement gap between White and Black students narrowed at grade 4 between 2009 and 2015, narrowed at grade 8 between 2009 and 2015, and showed no significant change at grade 12 between 2009 and 2015. The achievement gap between White and Hispanic students narrowed at grade 4 between 2009 and 2015, narrowed at grade 8 between 2009 and 2015, and showed no significant change at grade 12 between 2009 and 2015. The achievement gap between male and female students showed no significant change at grades 4, 8, and 12 between 2009 and 2015. The achievement gap between students not eligible for the National School Lunch Program and those eligible for the program showed no significant change at grades 4 and 8 between 2009 and 2015. No data for this gap is available for grade 12." />&#160; </div></div> ​ 
<div id="gapKey">
   <img src="/subject/gaps/images/gaps_key.png" alt="key" id="imgGapKey" />&#160;</div><div id="gapKey">
   <br>
</div><div id="gapKey"><div style="text-align&#58;left;"> 
      <span style="font-size&#58;9pt;"><span style="color&#58;#212121;font-family&#58;calibri, sans-serif;line-height&#58;normal;">NOTE&#58; Not all assessments are administered at all grades. For more information on each subject, click on the report of interest in the menu at the top of this page. &#160;The 2011 NAEP writing assessment was based on the new framework and precludes the possibility of reporting trend results prior to 2011. NSLP = National School Lunch Program.​ For the NSLP eligibility category, results for assessment years prior to 2003 are not reported because of the improved quality of the data on students' eligibility for the school lunch program beginning in 2003. Score changes shown on this page compare the score differences in the earliest year available for a subject/grade/variable to that of the most recent assessment.</span>​</span></div></div>
								<!--END CONTENT-->
							</div>
						</div>
					</div>
				</div>
			
			
	    				
			
		</div>
	</div>
</asp:Content>

<asp:Content ID="PlaceHolderPageHead" runat="server" ContentPlaceHolderID="PlaceHolderPageHead">
<script src="/Scripts/asp.net.js" type="text/javascript"></script>
</asp:Content>

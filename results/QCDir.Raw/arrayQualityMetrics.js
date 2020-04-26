// (C) Wolfgang Huber 2010-2011

// Script parameters - these are set up by R in the function 'writeReport' when copying the 
//   template for this script from arrayQualityMetrics/inst/scripts into the report.

var highlightInitial = [ false, false, false, false, false, true, false, false, true, false, false, false, false, true, true ];
var arrayMetadata    = [ [ "1", ""GSM4460439","Day 1 adult uninjured, bio rep 1","GSM4460439","Public on Apr 09 2020","Apr 08 2020","Apr 09 2020","RNA","1","Day 1 adult C. elegans","Caenorhabditis elegans","strain: CF512","age: Day 1 adult","tissue: All tissues","treatment: Uninjured","Paralytic Injury on Precellys 24 (max settings, 20 sec) in M9 or only incubation in M9 (uninjured).","Egg synchronization by hypochlorite treatment followed by growth at 25C.","total RNA","Qiazol extraction followed by purification with RNeasy mini kit.","biotin","cRNA was biotinylated according to the standard Affymetrix protocol.","6239","Standard protocol.","Standard protocol.","PD11041510A","Caenorhabditis_D1-1","Day 1 adult C. elegans without injury","Data were processed with Bioconductor according to the GC-RMA method, including quantile normalization, chip averaging, and background adjustment.","GPL200","Peter,M,Douglas","Molecular Biology","UT Southwestern Medical Center","6000 Harry Hines Blvd","Dallas","TX","75390","USA","ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM4460nnn/GSM4460439/suppl/GSM4460439_PD11041510A.CEL.gz","22625","Day 1 adult","CF512","All tissues","Uninjured"" ], [ "2", ""GSM4460440","Day 1 adult uninjured, bio rep 2","GSM4460440","Public on Apr 09 2020","Apr 08 2020","Apr 09 2020","RNA","1","Day 1 adult C. elegans","Caenorhabditis elegans","strain: CF512","age: Day 1 adult","tissue: All tissues","treatment: Uninjured","Paralytic Injury on Precellys 24 (max settings, 20 sec) in M9 or only incubation in M9 (uninjured).","Egg synchronization by hypochlorite treatment followed by growth at 25C.","total RNA","Qiazol extraction followed by purification with RNeasy mini kit.","biotin","cRNA was biotinylated according to the standard Affymetrix protocol.","6239","Standard protocol.","Standard protocol.","PD11041510B","Caenorhabditis_D1-2","Day 1 adult C. elegans without injury","Data were processed with Bioconductor according to the GC-RMA method, including quantile normalization, chip averaging, and background adjustment.","GPL200","Peter,M,Douglas","Molecular Biology","UT Southwestern Medical Center","6000 Harry Hines Blvd","Dallas","TX","75390","USA","ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM4460nnn/GSM4460440/suppl/GSM4460440_PD11041510B.CEL.gz","22625","Day 1 adult","CF512","All tissues","Uninjured"" ], [ "3", ""GSM4460441","Day 1 adult uninjured, bio rep 3","GSM4460441","Public on Apr 09 2020","Apr 08 2020","Apr 09 2020","RNA","1","Day 1 adult C. elegans","Caenorhabditis elegans","strain: CF512","age: Day 1 adult","tissue: All tissues","treatment: Uninjured","Paralytic Injury on Precellys 24 (max settings, 20 sec) in M9 or only incubation in M9 (uninjured).","Egg synchronization by hypochlorite treatment followed by growth at 25C.","total RNA","Qiazol extraction followed by purification with RNeasy mini kit.","biotin","cRNA was biotinylated according to the standard Affymetrix protocol.","6239","Standard protocol.","Standard protocol.","PD11041510C","Caenorhabditis_D1-3","Day 1 adult C. elegans without injury","Data were processed with Bioconductor according to the GC-RMA method, including quantile normalization, chip averaging, and background adjustment.","GPL200","Peter,M,Douglas","Molecular Biology","UT Southwestern Medical Center","6000 Harry Hines Blvd","Dallas","TX","75390","USA","ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM4460nnn/GSM4460441/suppl/GSM4460441_PD11041510C.CEL.gz","22625","Day 1 adult","CF512","All tissues","Uninjured"" ], [ "4", ""GSM4460442","Day 1 adult injured, bio rep 1","GSM4460442","Public on Apr 09 2020","Apr 08 2020","Apr 09 2020","RNA","1","Day 1 adult C. elegans","Caenorhabditis elegans","strain: CF512","age: Day 1 adult","tissue: All tissues","treatment: Paralytic injury","Paralytic Injury on Precellys 24 (max settings, 20 sec) in M9 or only incubation in M9 (uninjured).","Egg synchronization by hypochlorite treatment followed by growth at 25C.","total RNA","Qiazol extraction followed by purification with RNeasy mini kit.","biotin","cRNA was biotinylated according to the standard Affymetrix protocol.","6239","Standard protocol.","Standard protocol.","PD11041511A","Caenorhabditis_D1-4","Day 1 adult C. elegans injured at day 1","Data were processed with Bioconductor according to the GC-RMA method, including quantile normalization, chip averaging, and background adjustment.","GPL200","Peter,M,Douglas","Molecular Biology","UT Southwestern Medical Center","6000 Harry Hines Blvd","Dallas","TX","75390","USA","ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM4460nnn/GSM4460442/suppl/GSM4460442_PD11041511A.CEL.gz","22625","Day 1 adult","CF512","All tissues","Paralytic injury"" ], [ "5", ""GSM4460443","Day 1 adult injured, bio rep 2","GSM4460443","Public on Apr 09 2020","Apr 08 2020","Apr 09 2020","RNA","1","Day 1 adult C. elegans","Caenorhabditis elegans","strain: CF512","age: Day 1 adult","tissue: All tissues","treatment: Paralytic injury","Paralytic Injury on Precellys 24 (max settings, 20 sec) in M9 or only incubation in M9 (uninjured).","Egg synchronization by hypochlorite treatment followed by growth at 25C.","total RNA","Qiazol extraction followed by purification with RNeasy mini kit.","biotin","cRNA was biotinylated according to the standard Affymetrix protocol.","6239","Standard protocol.","Standard protocol.","PD11041511B","Caenorhabditis_D1-5","Day 1 adult C. elegans injured at day 1","Data were processed with Bioconductor according to the GC-RMA method, including quantile normalization, chip averaging, and background adjustment.","GPL200","Peter,M,Douglas","Molecular Biology","UT Southwestern Medical Center","6000 Harry Hines Blvd","Dallas","TX","75390","USA","ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM4460nnn/GSM4460443/suppl/GSM4460443_PD11041511B.CEL.gz","22625","Day 1 adult","CF512","All tissues","Paralytic injury"" ], [ "6", ""GSM4460444","Day 1 adult injured, bio rep 3","GSM4460444","Public on Apr 09 2020","Apr 08 2020","Apr 09 2020","RNA","1","Day 1 adult C. elegans","Caenorhabditis elegans","strain: CF512","age: Day 1 adult","tissue: All tissues","treatment: Paralytic injury","Paralytic Injury on Precellys 24 (max settings, 20 sec) in M9 or only incubation in M9 (uninjured).","Egg synchronization by hypochlorite treatment followed by growth at 25C.","total RNA","Qiazol extraction followed by purification with RNeasy mini kit.","biotin","cRNA was biotinylated according to the standard Affymetrix protocol.","6239","Standard protocol.","Standard protocol.","PD11041511C","Caenorhabditis_D1-6","Day 1 adult C. elegans injured at day 1","Data were processed with Bioconductor according to the GC-RMA method, including quantile normalization, chip averaging, and background adjustment.","GPL200","Peter,M,Douglas","Molecular Biology","UT Southwestern Medical Center","6000 Harry Hines Blvd","Dallas","TX","75390","USA","ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM4460nnn/GSM4460444/suppl/GSM4460444_PD11041511C.CEL.gz","22625","Day 1 adult","CF512","All tissues","Paralytic injury"" ], [ "7", ""GSM4460445","Day 4 adult uninjured, bio rep 1","GSM4460445","Public on Apr 09 2020","Apr 08 2020","Apr 09 2020","RNA","1","Day 4 adult C. elegans","Caenorhabditis elegans","strain: CF512","age: Day 4 adult","tissue: All tissues","treatment: Uninjured","Paralytic Injury on Precellys 24 (max settings, 20 sec) in M9 or only incubation in M9 (uninjured).","Egg synchronization by hypochlorite treatment followed by growth at 25C.","total RNA","Qiazol extraction followed by purification with RNeasy mini kit.","biotin","cRNA was biotinylated according to the standard Affymetrix protocol.","6239","Standard protocol.","Standard protocol.","PD11041540A","Caenorhabditis_D4-1","Day 4 adult C. elegans without injury","Data were processed with Bioconductor according to the GC-RMA method, including quantile normalization, chip averaging, and background adjustment.","GPL200","Peter,M,Douglas","Molecular Biology","UT Southwestern Medical Center","6000 Harry Hines Blvd","Dallas","TX","75390","USA","ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM4460nnn/GSM4460445/suppl/GSM4460445_PD11041540A.CEL.gz","22625","Day 4 adult","CF512","All tissues","Uninjured"" ], [ "8", ""GSM4460446","Day 4 adult uninjured, bio rep 2","GSM4460446","Public on Apr 09 2020","Apr 08 2020","Apr 09 2020","RNA","1","Day 4 adult C. elegans","Caenorhabditis elegans","strain: CF512","age: Day 4 adult","tissue: All tissues","treatment: Uninjured","Paralytic Injury on Precellys 24 (max settings, 20 sec) in M9 or only incubation in M9 (uninjured).","Egg synchronization by hypochlorite treatment followed by growth at 25C.","total RNA","Qiazol extraction followed by purification with RNeasy mini kit.","biotin","cRNA was biotinylated according to the standard Affymetrix protocol.","6239","Standard protocol.","Standard protocol.","PD11041540B","Caenorhabditis_D4-2","Day 4 adult C. elegans without injury","Data were processed with Bioconductor according to the GC-RMA method, including quantile normalization, chip averaging, and background adjustment.","GPL200","Peter,M,Douglas","Molecular Biology","UT Southwestern Medical Center","6000 Harry Hines Blvd","Dallas","TX","75390","USA","ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM4460nnn/GSM4460446/suppl/GSM4460446_PD11041540B.CEL.gz","22625","Day 4 adult","CF512","All tissues","Uninjured"" ], [ "9", ""GSM4460447","Day 4 adult uninjured, bio rep 3","GSM4460447","Public on Apr 09 2020","Apr 08 2020","Apr 09 2020","RNA","1","Day 4 adult C. elegans","Caenorhabditis elegans","strain: CF512","age: Day 4 adult","tissue: All tissues","treatment: Uninjured","Paralytic Injury on Precellys 24 (max settings, 20 sec) in M9 or only incubation in M9 (uninjured).","Egg synchronization by hypochlorite treatment followed by growth at 25C.","total RNA","Qiazol extraction followed by purification with RNeasy mini kit.","biotin","cRNA was biotinylated according to the standard Affymetrix protocol.","6239","Standard protocol.","Standard protocol.","PD11041540C","Caenorhabditis_D4-3","Day 4 adult C. elegans without injury","Data were processed with Bioconductor according to the GC-RMA method, including quantile normalization, chip averaging, and background adjustment.","GPL200","Peter,M,Douglas","Molecular Biology","UT Southwestern Medical Center","6000 Harry Hines Blvd","Dallas","TX","75390","USA","ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM4460nnn/GSM4460447/suppl/GSM4460447_PD11041540C.CEL.gz","22625","Day 4 adult","CF512","All tissues","Uninjured"" ], [ "10", ""GSM4460448","Day 4 adult injured, bio rep 1","GSM4460448","Public on Apr 09 2020","Apr 08 2020","Apr 09 2020","RNA","1","Day 4 adult C. elegans","Caenorhabditis elegans","strain: CF512","age: Day 4 adult","tissue: All tissues","treatment: Paralytic injury","Paralytic Injury on Precellys 24 (max settings, 20 sec) in M9 or only incubation in M9 (uninjured).","Egg synchronization by hypochlorite treatment followed by growth at 25C.","total RNA","Qiazol extraction followed by purification with RNeasy mini kit.","biotin","cRNA was biotinylated according to the standard Affymetrix protocol.","6239","Standard protocol.","Standard protocol.","PD11041541A","Caenorhabditis_D4-4","Day 4 adult C. elegans injured at day 4","Data were processed with Bioconductor according to the GC-RMA method, including quantile normalization, chip averaging, and background adjustment.","GPL200","Peter,M,Douglas","Molecular Biology","UT Southwestern Medical Center","6000 Harry Hines Blvd","Dallas","TX","75390","USA","ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM4460nnn/GSM4460448/suppl/GSM4460448_PD11041541A.CEL.gz","22625","Day 4 adult","CF512","All tissues","Paralytic injury"" ], [ "11", ""GSM4460449","Day 4 adult injured, bio rep 2","GSM4460449","Public on Apr 09 2020","Apr 08 2020","Apr 09 2020","RNA","1","Day 4 adult C. elegans","Caenorhabditis elegans","strain: CF512","age: Day 4 adult","tissue: All tissues","treatment: Paralytic injury","Paralytic Injury on Precellys 24 (max settings, 20 sec) in M9 or only incubation in M9 (uninjured).","Egg synchronization by hypochlorite treatment followed by growth at 25C.","total RNA","Qiazol extraction followed by purification with RNeasy mini kit.","biotin","cRNA was biotinylated according to the standard Affymetrix protocol.","6239","Standard protocol.","Standard protocol.","PD11041541B","Caenorhabditis_D4-5","Day 4 adult C. elegans injured at day 4","Data were processed with Bioconductor according to the GC-RMA method, including quantile normalization, chip averaging, and background adjustment.","GPL200","Peter,M,Douglas","Molecular Biology","UT Southwestern Medical Center","6000 Harry Hines Blvd","Dallas","TX","75390","USA","ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM4460nnn/GSM4460449/suppl/GSM4460449_PD11041541B.CEL.gz","22625","Day 4 adult","CF512","All tissues","Paralytic injury"" ], [ "12", ""GSM4460450","Day 4 adult injured, bio rep 3","GSM4460450","Public on Apr 09 2020","Apr 08 2020","Apr 09 2020","RNA","1","Day 4 adult C. elegans","Caenorhabditis elegans","strain: CF512","age: Day 4 adult","tissue: All tissues","treatment: Paralytic injury","Paralytic Injury on Precellys 24 (max settings, 20 sec) in M9 or only incubation in M9 (uninjured).","Egg synchronization by hypochlorite treatment followed by growth at 25C.","total RNA","Qiazol extraction followed by purification with RNeasy mini kit.","biotin","cRNA was biotinylated according to the standard Affymetrix protocol.","6239","Standard protocol.","Standard protocol.","PD11041541C","Caenorhabditis_D4-6","Day 4 adult C. elegans injured at day 4","Data were processed with Bioconductor according to the GC-RMA method, including quantile normalization, chip averaging, and background adjustment.","GPL200","Peter,M,Douglas","Molecular Biology","UT Southwestern Medical Center","6000 Harry Hines Blvd","Dallas","TX","75390","USA","ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM4460nnn/GSM4460450/suppl/GSM4460450_PD11041541C.CEL.gz","22625","Day 4 adult","CF512","All tissues","Paralytic injury"" ], [ "13", ""GSM4460451","Day 4 adult injured 4x, bio rep 1","GSM4460451","Public on Apr 09 2020","Apr 08 2020","Apr 09 2020","RNA","1","Day 4 adult C. elegans","Caenorhabditis elegans","strain: CF512","age: Day 4 adult","tissue: All tissues","treatment: Paralytic injury 4x","Paralytic Injury on Precellys 24 (max settings, 20 sec) in M9 or only incubation in M9 (uninjured).","Egg synchronization by hypochlorite treatment followed by growth at 25C.","total RNA","Qiazol extraction followed by purification with RNeasy mini kit.","biotin","cRNA was biotinylated according to the standard Affymetrix protocol.","6239","Standard protocol.","Standard protocol.","PD11041544A","Caenorhabditis_D4-7","Day 4 adult C. elegans injured 4x","Data were processed with Bioconductor according to the GC-RMA method, including quantile normalization, chip averaging, and background adjustment.","GPL200","Peter,M,Douglas","Molecular Biology","UT Southwestern Medical Center","6000 Harry Hines Blvd","Dallas","TX","75390","USA","ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM4460nnn/GSM4460451/suppl/GSM4460451_PD11041544A.CEL.gz","22625","Day 4 adult","CF512","All tissues","Paralytic injury 4x"" ], [ "14", ""GSM4460452","Day 4 adult injured 4x, bio rep 2","GSM4460452","Public on Apr 09 2020","Apr 08 2020","Apr 09 2020","RNA","1","Day 4 adult C. elegans","Caenorhabditis elegans","strain: CF512","age: Day 4 adult","tissue: All tissues","treatment: Paralytic injury 4x","Paralytic Injury on Precellys 24 (max settings, 20 sec) in M9 or only incubation in M9 (uninjured).","Egg synchronization by hypochlorite treatment followed by growth at 25C.","total RNA","Qiazol extraction followed by purification with RNeasy mini kit.","biotin","cRNA was biotinylated according to the standard Affymetrix protocol.","6239","Standard protocol.","Standard protocol.","PD11041544B","Caenorhabditis_D4-8","Day 4 adult C. elegans injured 4x","Data were processed with Bioconductor according to the GC-RMA method, including quantile normalization, chip averaging, and background adjustment.","GPL200","Peter,M,Douglas","Molecular Biology","UT Southwestern Medical Center","6000 Harry Hines Blvd","Dallas","TX","75390","USA","ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM4460nnn/GSM4460452/suppl/GSM4460452_PD11041544B.CEL.gz","22625","Day 4 adult","CF512","All tissues","Paralytic injury 4x"" ], [ "15", ""GSM4460453","Day 4 adult injured 4x, bio rep 3","GSM4460453","Public on Apr 09 2020","Apr 08 2020","Apr 09 2020","RNA","1","Day 4 adult C. elegans","Caenorhabditis elegans","strain: CF512","age: Day 4 adult","tissue: All tissues","treatment: Paralytic injury 4x","Paralytic Injury on Precellys 24 (max settings, 20 sec) in M9 or only incubation in M9 (uninjured).","Egg synchronization by hypochlorite treatment followed by growth at 25C.","total RNA","Qiazol extraction followed by purification with RNeasy mini kit.","biotin","cRNA was biotinylated according to the standard Affymetrix protocol.","6239","Standard protocol.","Standard protocol.","PD11041544C","Caenorhabditis_D4-9","Day 4 adult C. elegans injured 4x","Data were processed with Bioconductor according to the GC-RMA method, including quantile normalization, chip averaging, and background adjustment.","GPL200","Peter,M,Douglas","Molecular Biology","UT Southwestern Medical Center","6000 Harry Hines Blvd","Dallas","TX","75390","USA","ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM4460nnn/GSM4460453/suppl/GSM4460453_PD11041544C.CEL.gz","22625","Day 4 adult","CF512","All tissues","Paralytic injury 4x"" ] ];
var svgObjectNames   = [ "pca", "dens" ];

var cssText = ["stroke-width:1; stroke-opacity:0.4",
               "stroke-width:3; stroke-opacity:1" ];

// Global variables - these are set up below by 'reportinit'
var tables;             // array of all the associated ('tooltips') tables on the page
var checkboxes;         // the checkboxes
var ssrules;


function reportinit() 
{
 
    var a, i, status;

    /*--------find checkboxes and set them to start values------*/
    checkboxes = document.getElementsByName("ReportObjectCheckBoxes");
    if(checkboxes.length != highlightInitial.length)
	throw new Error("checkboxes.length=" + checkboxes.length + "  !=  "
                        + " highlightInitial.length="+ highlightInitial.length);
    
    /*--------find associated tables and cache their locations------*/
    tables = new Array(svgObjectNames.length);
    for(i=0; i<tables.length; i++) 
    {
        tables[i] = safeGetElementById("Tab:"+svgObjectNames[i]);
    }

    /*------- style sheet rules ---------*/
    var ss = document.styleSheets[0];
    ssrules = ss.cssRules ? ss.cssRules : ss.rules; 

    /*------- checkboxes[a] is (expected to be) of class HTMLInputElement ---*/
    for(a=0; a<checkboxes.length; a++)
    {
	checkboxes[a].checked = highlightInitial[a];
        status = checkboxes[a].checked; 
        setReportObj(a+1, status, false);
    }

}


function safeGetElementById(id)
{
    res = document.getElementById(id);
    if(res == null)
        throw new Error("Id '"+ id + "' not found.");
    return(res)
}

/*------------------------------------------------------------
   Highlighting of Report Objects 
 ---------------------------------------------------------------*/
function setReportObj(reportObjId, status, doTable)
{
    var i, j, plotObjIds, selector;

    if(doTable) {
	for(i=0; i<svgObjectNames.length; i++) {
	    showTipTable(i, reportObjId);
	} 
    }

    /* This works in Chrome 10, ssrules will be null; we use getElementsByClassName and loop over them */
    if(ssrules == null) {
	elements = document.getElementsByClassName("aqm" + reportObjId); 
	for(i=0; i<elements.length; i++) {
	    elements[i].style.cssText = cssText[0+status];
	}
    } else {
    /* This works in Firefox 4 */
    for(i=0; i<ssrules.length; i++) {
        if (ssrules[i].selectorText == (".aqm" + reportObjId)) {
		ssrules[i].style.cssText = cssText[0+status];
		break;
	    }
	}
    }

}

/*------------------------------------------------------------
   Display of the Metadata Table
  ------------------------------------------------------------*/
function showTipTable(tableIndex, reportObjId)
{
    var rows = tables[tableIndex].rows;
    var a = reportObjId - 1;

    if(rows.length != arrayMetadata[a].length)
	throw new Error("rows.length=" + rows.length+"  !=  arrayMetadata[array].length=" + arrayMetadata[a].length);

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = arrayMetadata[a][i];
}

function hideTipTable(tableIndex)
{
    var rows = tables[tableIndex].rows;

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = "";
}


/*------------------------------------------------------------
  From module 'name' (e.g. 'density'), find numeric index in the 
  'svgObjectNames' array.
  ------------------------------------------------------------*/
function getIndexFromName(name) 
{
    var i;
    for(i=0; i<svgObjectNames.length; i++)
        if(svgObjectNames[i] == name)
	    return i;

    throw new Error("Did not find '" + name + "'.");
}


/*------------------------------------------------------------
  SVG plot object callbacks
  ------------------------------------------------------------*/
function plotObjRespond(what, reportObjId, name)
{

    var a, i, status;

    switch(what) {
    case "show":
	i = getIndexFromName(name);
	showTipTable(i, reportObjId);
	break;
    case "hide":
	i = getIndexFromName(name);
	hideTipTable(i);
	break;
    case "click":
        a = reportObjId - 1;
	status = !checkboxes[a].checked;
	checkboxes[a].checked = status;
	setReportObj(reportObjId, status, true);
	break;
    default:
	throw new Error("Invalid 'what': "+what)
    }
}

/*------------------------------------------------------------
  checkboxes 'onchange' event
------------------------------------------------------------*/
function checkboxEvent(reportObjId)
{
    var a = reportObjId - 1;
    var status = checkboxes[a].checked;
    setReportObj(reportObjId, status, true);
}


/*------------------------------------------------------------
  toggle visibility
------------------------------------------------------------*/
function toggle(id){
  var head = safeGetElementById(id + "-h");
  var body = safeGetElementById(id + "-b");
  var hdtxt = head.innerHTML;
  var dsp;
  switch(body.style.display){
    case 'none':
      dsp = 'block';
      hdtxt = '-' + hdtxt.substr(1);
      break;
    case 'block':
      dsp = 'none';
      hdtxt = '+' + hdtxt.substr(1);
      break;
  }  
  body.style.display = dsp;
  head.innerHTML = hdtxt;
}

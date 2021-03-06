function onrowover(row)
{
	row.style.backgroundColor= g_color4;
	row.style.cursor="pointer";
}

function onrowout(row)
{
     row.style.backgroundColor="#fafcff";
     row.style.cursor="";
     
}
 
function onrowsel(row)
{
   row.style.backgroundColor= g_color4;
}

function onrowunsel(row)
{
     row.style.backgroundColor="#fafcff";
}


function OnClickAdd(typeUnit)
{
	var sProc, sId, sRet;
	var args = new Array;
	
	if (typeUnit == "1"){
		args[0] = top.g_URL;
		args[1] = top.g_SessionPId.toString();
		args[2] = top.g_ArchivePId.toString();
		args[3] = top.Idioma;
		
		sRet = top.ShowModalDialog(top.g_URL + "/frmtypeproc.htm", args, 230, 325, "");	

		if (sRet && (sRet != "")){
			var tokens;

			tokens = top.getTokens(sRet, "#", "#", 3);
			sId = tokens[0];
			sProc = tokens[2];

			if (sId == "-1"){
				sProc = tokens[1];
			}
		}
	}
	else{
		sId = "0";
		args[0] = top.Idioma;
		sProc = top.ShowModalDialog(top.g_URL + "/frmproc.htm", args, 230, 300, "");	
	}
		
	if ((sProc != "") && sProc){
		NewOrigDoc(sId, sProc);

		document.getElementById("btnSave").disabled=false;
	}
}

function OnClickDel()
{
	if (confirm(top.GetIdsLan("IDS_MSG_CONFIRM_DEL_ORIGDOCS")) == true)	{
		if (document.getElementById("CanDel").value == "0")	{
			for (i = 0; i < tabData.rows.length; i++){
				if ((tabData.rows[i].cells[1].firstChild.checked == true) &&
					(tabData.rows[i].cells[0].childNodes[1].value == "0")){
					alert(top.GetIdsLan("IDS_MSG_CANT_DEL_ORIGDOCS"));
					return;
				}
			}
		}

		for (i = tabData.rows.length - 1; i >= 0; i--){
			if (tabData.rows[i].cells[1].firstChild.checked == true){
				tabData.deleteRow(i);
				document.getElementById("btnSave").disabled=false;
			}
		}

		for (i = 0; i < tabData.rows.length; i++){
			top.SetInnerText(tabData.rows[i].cells[2], i + 1);
		}

		if (tabData.rows.length == 0){
			document.getElementById("btnDel").disabled=true;
		}
	 }
}


function NewOrigDoc(Id, Proc)
{
	var newRow;
	var check;
	var datas = new Array;
	var size=tabData.rows.length;
	var newCell = new Array;
	
	newRow = tabData.insertRow();

	newRow.height=20;
	newRow.className="Style5";
	newRow.tabIndex=-1;
	newRow.align="left";
	
	newCell[0] = newRow.insertCell(0);
	newCell[0].width="1%";

	datas[0]=document.createElement("INPUT");

	datas[0].setAttribute("type" , "hidden");
	datas[0].setAttribute("name", "IdProc");
	datas[0].value=Id;

	newCell[0].appendChild(datas[0]);

	datas[1]=document.createElement("INPUT");

	datas[1].setAttribute("type" , "hidden");
	datas[1].setAttribute("name", "IdNew");
	datas[1].value="1";

	newCell[0].appendChild(datas[1]);
	
	newCell[1] = newRow.insertCell(1);
	newCell[1].width="5%";

	check=document.createElement("INPUT");

	check.setAttribute("type", "checkbox");
	check.setAttribute("class", "checkbox");
	check.setAttribute("name", "checkrow");

	newCell[1].appendChild(check);
	
	newCell[2] = newRow.insertCell(2);
	top.SetInnerText(newCell[2], size+1);
	newCell[2].style.fontStyle="italic";
	
	newCell[3] = newRow.insertCell(3);
	newCell[3].width="1%";
	
	newCell[4] = newRow.insertCell(4);
	newCell[4].width="85%";
	newCell[4].align="left";
	top.SetInnerText(newCell[4], Proc);
	newCell[4].style.fontStyle="italic";

	document.getElementById("btnDel").disabled=false;
}


function sendData()
{
	var strRet;
	var datas;
	var temp;

	document.getElementById("btnDel").disabled = true;
	document.getElementById("btnAdd").disabled = true;
	document.getElementById("btnSave").disabled = true;
   
	datas = tabData.rows.length + "#";

	for (i = 0; i < tabData.rows.length; i++){
		temp = tabData.rows[i].cells[0].firstChild.value + "#" + top.GetInnerText(tabData.rows[i].cells[4]) + "#";

		datas = datas + temp;
	}
	
	if (datas != ""){
		strRet = top.g_URL + "/saveorigdoc.jsp?SessionPId=" + top.g_SessionPId
                        + "&ArchivePId=" + top.g_ArchivePId 
			+ "&FolderPId=" + top.g_FolderPId
			+ "&OpenType=" + top.g_OpenType;

		document.getElementById("btnDel").disabled = true;
		document.getElementById("btnAdd").disabled = true;
		document.getElementById("btnSave").disabled = true;
		document.getElementById("datas").value = datas;
		document.getElementById("frmOrigDocs").action = strRet;
     	      	
		return true;
   	}
   	else {
	      return false;
   	}
}

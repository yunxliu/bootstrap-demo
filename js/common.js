/*
Copyright (c) 2014 Intel Corporation.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of works must retain the original copyright notice, this list
  of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the original copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.
* Neither the name of Intel Corporation nor the names of its contributors
  may be used to endorse or promote products derived from this work without
  specific prior written permission.

THIS SOFTWARE IS PROVIDED BY INTEL CORPORATION "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL INTEL CORPORATION BE LIABLE FOR ANY DIRECT,
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

Authors:
        Liu, Yun <yunx.liu@intel.com>
*/

function showMessage(type, msg) {
  if (msg == "") {
    msg = $("#myModal").html();
  }
  $("#myModal").html("<div id='modal-dialog' class='modal-dialog' style='position: fixed; width: auto; left: 25%; margin-top: 0px;'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button><h3 class='modal-title'><span id='myModalLabel' class='glyphicon'></span></h3></div><div id='modal-body' class='modal-body'></div><div class='modal-footer'></div></div></div>");
  $("#modal-body").html(msg);
  if (type == "help") {
    $("#modal-dialog").css("bottom", "30px");
    $("#myModalLabel").addClass("glyphicon-info-sign");
  } else if (type == "success") {
    $("#modal-dialog").css("bottom", "30%");
    $("#myModalLabel").addClass("glyphicon-ok-sign");
  } else if (type == "error") {
    $("#modal-dialog").css("bottom", "30%");
    $("#myModalLabel").addClass("glyphicon-warning-sign");
  }
}

$(document).ready(function() {

});
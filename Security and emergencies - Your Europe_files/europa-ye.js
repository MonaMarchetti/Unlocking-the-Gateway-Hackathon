// Global variables
var wind_w;
var docu_w;
var smrt_d;
var desk_d;
var path_a = [];
var path_l = [];
var path_r = [];
var open_a;
var open_c;
var open_g;
var open_i;
var scrl_t;
var scrl_m;
var open_t;
var menu_o;
var menu_m = [];
var menu_s;
var menu_d;
var menu_c;
var menu_n;
var menu_z;
var preo_a;
var preo_g;
var preo_i;
var navi_l;
var lang_o;
var jump_c = 0;
var home_p = 0;
var sect_p = 0;
var side_a;
var side_m;
var side_u;
var scrl_u;
var side_t;
var side_h;
var left_p;
var home_a;
var home_g;
var tgle_h;
var inte_c;
var inte_t;
var site_m;
var ntnl_c;
var totCnt;
var totExp;
var vEmail;
var splash_page;
var splash_choose_lg;
var neutral_p;
var scrl_e = 0;
var inpm_a = {};
var sdg;
var accepted_lg = [ 'bg', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fr', 'fi', 'hr', 'hu', 'it', 'lt', 'lv', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'sl', 'sv' ];
var current_ye;
var current_lg;
var current_loc;
var moveToTop = true;
var not2ndTime = false;
var hash_e = 1;
var prev_y = 0;
var hash_c = '';

// Defaults settings
$( document ).ready( function() {
	/*if ( $.cookie( 'eu_cookie_consent' ) && $.cookie( 'eu_cookie_consent' ).substr( 7, 18 ) == 'europa/youreurope/' ) {
		if ( $.cookie( '_pk_id.5.f0be' ) || ( $.cookie( '_pk_id.47.58bc' ) && parseInt( $.cookie( '_pk_id.47.58bc' ).split( '.' )[2] ) > 1 ) ) {
			getDGCOMMSurvey();
		}
	}*/ 
	neutral_p = $( '#eu-ye-page-header' ).hasClass( 'neutral' );
	home_p = $( '#eu-ye-page-header' ).hasClass( 'home' );
	splash_page = $( '#header-content' ).hasClass( 'splash' );
	menu_m = $( home_p ? '#eu-ye-homepage-navigation' : '#eu-ye-navigation' ).find( 'li.section-menu a.menu' );
	menu_s = $( home_p ? '#eu-ye-homepage-navigation' : '#eu-ye-navigation' ).find( 'li.extra a.submenu' );
	sect_p = $( '#main-content' ).hasClass( 'section' );
	site_m = $( '#main-content' ).hasClass( 'sitemap' );
	ntnl_c = $( '#main-content' ).hasClass( 'nat-contacts' );
	ntnl_p = $( '#main-content' ).hasClass( 'nat-contact-page' );
	scrl_n = 0;
	
	sdg = $( '#eu-languages-toggle' ).hasClass( 'sdg' );
	
	if ( splash_page ) setSplashPageLanguageMenu();
	checkYEPortal();
	checkCurrent();
	resetWinVariables();
	setLangMenu();
	setLangMenuPosition();
	getBreadcrumbElements();
	if ( home_p ) setHomeNavigation();
	else setNavigation();
	setSubNavigation();
	if ( !home_p && !splash_page && !sdg ) resetTopElementsPositions();
	feedbackDisplay();
	setToggleContents( '#main-article' );
	if ( !home_p && !sect_p && !site_m && !ntnl_c && !splash_page && $( '#in-page-nav' ).length ) planInPageMenu();
	relatedDisplay( '#nat-admin-button', '#nat-admin-content', 'Ask national administrations' );
	relatedDisplay( '#advice-button', '#advice-content', 'Get help and advice' );
	setTimeout( updateSideMenuPosition, 10 );
	if ( site_m ) setSiteMaps();
	
	$( '#switch-site' ).css( 'display', 'block' );
	
	if ( $( '#in-page-nav' ).length ){
		side_t = 327;
		side_h = $( '#in-page-nav' ).outerHeight();
		scrl_u = true;
	}
	
	/* TRACKING - START */
	$( '#advice-content a[href]' ).on( 'click', function( e ) {
		if ( typeof _paq !== 'undefined' ) {
			var service_n = $( e.target ).parent().closest( 'div' ).attr( 'data-service-name' );
			var service_t = service_n ? service_n : $( e.target ).attr( 'href' );
			
			_paq.push( ['trackEvent', current_ye, 'Service', service_t] );
			trackKindOfLink( $( e.target ).attr( 'href' ) );
		}
	} );
	
	$( '#main-article a[href]' ).on( 'click', function( e ) {
		if ( typeof _paq !== 'undefined' ) {
			trackKindOfLink( $( e.target ).attr( 'href' ) );
		}
	} );
	
	$( '#eu-ye-navigation a[href]' ).on( 'click', function( e ) {
		if ( typeof _paq !== 'undefined' ) {
			_paq.push( ['trackEvent', current_ye, 'Main-navigation', $( e.target ).attr( 'href' )] );
			_paq.push( ['trackEvent', current_ye, 'Internal-link', $( e.target ).attr( 'href' )] );
		}
	} );
	
	$( '#eu-ye-homepage-navigation a[href]' ).on( 'click', function( e ) {
		if ( typeof _paq !== 'undefined' ) {
			_paq.push( ['trackEvent', current_ye, 'HP-navigation', $( e.target ).attr( 'href' )] );
			_paq.push( ['trackEvent', current_ye, 'Internal-link', $( e.target ).attr( 'href' )] );
		}
	} );
	
	$( '#eu-languages-menu a[href]' ).on( 'click', function( e ) {
		if ( typeof _paq !== 'undefined' ) {smoiothMove
			_paq.push( ['trackEvent', current_ye, 'Language-menu', $( e.target ).attr( 'href' )] );
			_paq.push( ['trackEvent', current_ye, 'Internal-link', $( e.target ).attr( 'href' )] );
		}
	} );
	
	$( '#eu-ye-logo' ).on( 'click', function( e ) {
		if ( typeof _paq !== 'undefined' ) {
			_paq.push( ['trackEvent', current_ye, 'Logo-link', $( e.target ).attr( 'href' )] );
			_paq.push( ['trackEvent', current_ye, 'YE-HP-link', $( e.target ).attr( 'href' )] );
		}
	} );
	
	$( '#eu-breadcrumb a[href]' ).on( 'click', function( e ) {
		if ( typeof _paq !== 'undefined' ) {
			_paq.push( ['trackEvent', current_ye, 'EU-Breadcrumb', $( e.target ).attr( 'href' )] );
			trackKindOfLink( $( e.target ).attr( 'href' ) );
		}
	} );
	
	$( '#switch-site' ).on( 'click', function( e ) {
		if ( typeof _paq !== 'undefined' ) {			
			_paq.push( ['trackEvent', current_ye, 'Switch-site', current_ye + ' to ' + ( current_ye == 'Business' ? 'Citizens' : 'Business' )] );
		}
	} );
	/* TRACKING - END */
	
	//setSurveyInvitation( 2019, 1, 50, 50 ); // Year / audience targeted / minimum secs on website / minimum secs on 2nd+ visited pages
	
	//the EEN Form
	if ( $( '#help-advice-form' ).length ) {
		$( '#partner-country' ).on( 'change', eenLoadTowns );
		eenLoadTowns();
		countCharacters();
	}
	
	$( '#help-advice-form' ).on( 'submit', function( e ) { 
		e.preventDefault();
		
		vEmail = 1;
		totCnt = 0;
		totExp = 16;
		
		var mailMs = checkInputText( '#help-advice-form #comment' );
        var myData = {	page : window.location.href,
						country : checkSelect( '#help-advice-form #partner-country' ),
						city : checkSelect( '#help-advice-form #partner-city' ),
						emailAddress : checkEmail( '#help-advice-form #email' ),
						firstName : checkInputText( '#help-advice-form #first_name' ),
						surname : checkInputText( '#help-advice-form #surname' ),
						telephone : checkInputText( '#help-advice-form #telephone' ),
						companyName : checkInputText( '#help-advice-form #company_name' ),
						legalForm : checkInputText( '#help-advice-form #legal_form' ),
						sector : checkSelect( '#help-advice-form #sector' ),
						size : checkSelect( '#help-advice-form #size' ),
						has_website : checkRadio( '#help-advice-form #has_website' ),
						company_website : checkInputText( '#help-advice-form #company_website' ),
						activity : checkSelect( '#help-advice-form #activity' ),
						town : checkInputText( '#help-advice-form #town' ),
						postcode : checkInputText( '#help-advice-form #postcode' ),
						topicId : checkSelect( '#help-advice-form #subject' ), 
						topic : $( '#help-advice-form #subject option:selected' ).text().replace( /'/g, '&apos;' ),
						from : 'YEB',
						sendCopy : String( $('#help-advice-form #send-a-copy').prop('checked') )
					};
					
		if ( myData.has_website == 'yes' ) totExp++;
		else $( '#company_website' ).removeClass( 'error' );
		
		if ( totCnt == totExp ) {
			disableForm( '#help-advice-form' );
			
			if ( typeof _paq !== 'undefined' ) {
				 _paq.push( ['trackEvent', 'Business', 'Submit', 'Local Businness Support (EEN form)'] );
			}
			$.ajax( {
				url: "https://webgate.ec.europa.eu/yest/europeanEnterpriseNetwork-portlet/api/enquiryws/enquiry/process-enquiry",
				//url: "https://webgate.acceptance.ec.europa.eu/yest/europeanEnterpriseNetwork-portlet/api/enquiryws/enquiry/process-enquiry",
				//url: "https://webgate.development.ec.europa.eu/yest/europeanEnterpriseNetwork-portlet/api/enquiryws/enquiry/process-enquiry",
                type: "POST",
                data: {
					enquiryData: JSON.stringify( myData ),
					mailMessage: mailMs
				},
                error: function(response) {
                    errorEENForm();
					console.log('Error:', response);
                },
                success: function(response) {
                    if ( response.match( 'ENQUIRY_OK' ) ) {
						$( '#enquiryOk' ).show();
						$( 'html, body' ).animate( { scrollTop : $( '#form-messages' ).offset().top - jump_c } );
                    } else {
						console.log('Other error:', response);
						//SYSTEM_ERROR
						//SPAM_ERROR
						//OTHER_SPAM_ERROR
						//OK_BUT_NO_MAIL_SENT
						//UNKNOWN_CONTACT_ERROR
						//UNKNOWN_CITY_ERROR
						//UNKNOWN_FROM_ERROR
						errorEENForm();
                    }
                }
            });
		} else if ( !vEmail ) {
			$( '#enquiryEmail' ).show();
			$( 'html, body' ).animate( { scrollTop : $( '#form-messages' ).offset().top - jump_c } );
		} else {
			$( 'html, body' ).animate( { scrollTop : $( $( '#help-advice-form .error' )[0] ).offset().top - jump_c } );
		}

        return false;
    } );
	
	/* Help us improve form at the bottom of the page */
    $( '#feedback-form' ).on( 'submit', function( e ) {   
		e.preventDefault();
		
		totCnt = 0;
		totExp = 2;
		
		/*check if it's a business or a citizens feedback*/
		var website = window.location.href.indexOf( '/citizens/' ) != -1 ? 'YEC' : 'YEB';
		
		var dtfb = {	language : current_lg,
						site : website,
						section : $( '#feedback-form #section' ).val() ? $( '#feedback-form #section' ).val().substr(1) : '.',
						found : checkRadio( '#feedback-form input[type="radio"]' ),
						looking : checkInputText( '#feedback-form #looking-topic' ),
						suggestions : $( '#feedback-form #suggestions' ).val(),
						ip : 'no-ip-anymore',
						hash : 'no-hash-anymore'
					};
		if ( totCnt == totExp ) {
			if ( typeof _paq !== 'undefined' ) {
				_paq.push( ['trackEvent', current_ye, 'Submit', 'Help us improve'] );
			}
			
			$.ajax( {
				//url: "https://webgate.development.ec.europa.eu/yest/feedback-portlet/api/jsonws/feedback/add-feedback",
				url : "https://webgate.ec.europa.eu/yest/feedback-portlet/api/jsonws/feedback/add-feedback",
				type: "POST",
				data: dtfb,
				error : function( response ) { 
					console.log(response);
					disableForm( '#feedback-form' );
					hideForm( '#feedback-form' );
				},
				success : function( response ) {
					console.log(response);
					
					var res_obj = JSON.parse( response );
					
					if ( res_obj.status == 'ok' ) $( $( '#feedback-form .status' )[0] ).show();
					disableForm( '#feedback-form' );
					hideForm( '#feedback-form' );
				}
			} );
		}
	} ); 
	
	
	/* Situation pages */
	if( jQuery('.situation').length ) {
		jQuery(".whats-your-situation").insertBefore("#situation-1");
		//new
		$( 'ul.situation-list' ).html( $( 'ul.situation-list' ).html().replace( /\r?\n|\r/g, '' ) );
		
		var nr_of_situations = jQuery( "ul.situation-list li" ).length;
		if (nr_of_situations==2) {jQuery( "ul.situation-list" ).addClass('two-situations')}
		if (nr_of_situations==3) {jQuery( "ul.situation-list" ).addClass('three-situations')}
		
		jQuery('.situation h5').remove();
		jQuery('.situation').hide();
		

		jQuery('.situation-list li a').on('click',function(e){
			e.preventDefault();
		});
		
		var activeEl=1;
		var situationChoice=getParameterByName('situation');
		if (situationChoice != ''){
			activeEl=situationChoice;
		}
		jQuery('.situation-list li').each(function(){
			var id_arr=jQuery(this).attr('id').split('-');
			if (id_arr[1]==activeEl){
				jQuery('#situation-'+activeEl).show();
				jQuery('#block-'+activeEl).addClass('current');
			} 
			//console.log(first+'----'+situation_title);
		});
		
		jQuery('.situation-list li').on('click',function(){
			jQuery('.situation-list li').removeClass('current');
			var el=jQuery(this);
			el.addClass('current');
			var id_arr=el.attr('id').split('-');
		
			jQuery('.main_situation_title').html(el.html());
			jQuery('.situation').hide();
			jQuery('#situation-'+id_arr[1]).show();
			updateInPageMenu();
		});
		updateInPageMenu();
	}
	
	/*epc - european professional card*/
	if( $('.epc-step').length ) {
		$('.epc-step').each(function(){
			if ($(this).hasClass('epc-step-half')){
				$(this).append('<span class="up-arrow"></span>');
			} else if (!$(this).next().hasClass('epc-step-half')){
				$(this).append('<span class="down-arrow"></span>');
			}
		});
		$('.epc-step-first').each(function(){
			$(this).next('.epc-step-half').addBack().wrapAll('<div class="epc-step-half-parent"/>');
		});
		$('.epc-step-half-parent').append('<div style="clear:both"></div>');
	}
	if( $('#epc-simulator').length ) {
			var xml;
			var document_details;
			var lang = $('html').attr('lang');
			var yes={'bg':'Да','cs':'Ano','da':'Ja','de':'Ja','et':'Jah','el':'Ναι','en':'Yes','es':'Sí','fr':'Oui','hr':'Da','it':'Sì','lv':'Jā','lt':'Taip','hu':'Igen','mt':'Iva','nl':'Ja','pl':'Tak','pt':'Sim','ro':'Da','sk':'Áno','sl':'Da','fi':'Kyllä','sv':'Ja'};
			var no={'bg':'Не','cs':'No','da':'Nej','de':'Nein','et':'Ei','el':'Όχι','en':'No','es':'No','fr':'Non','hr':'Ne','it':'No','lv':'Nē','lt':'Ne','hu':'Nem','mt':'Le','nl':'Nee','pl':'Nie','pt':'Não','ro':'Nu','sk':'Nie','sl':'Ne','fi':'Ei','sv':'Nej'};
			$.get('epc_'+lang+'.xml', function(data){
				xml=data
				$(xml).find('country_list country_option').each(function(){
					var country = $(this).text(); 
					var code = $(this).attr('code');
					$('#home').append($("<option></option>").attr("value",code).text(country));
					$('#host').append($("<option></option>").attr("value",code).text(country));
				});
				$('#holder-host-info').append('<div id="document-details" class="hide"></div>');
				$('#document-details').load ('../european-professional-card-documents/index_'+lang+'.htm #main-article');
			});
			
			$('#home').on('change',function(){
				if($(this).val()!=''){
					$('.holder-host').removeClass('hide');
					/*reset the rest*/
					$('#host').val('');
					$('.holder-profession').addClass('hide');
					$('#profession').val('');
					$('#profession option[value!=""]').remove();
					$('.holder-purpose').addClass('hide');
					$('#purpose').val('');
					$('#purpose option[value!=""]').remove();
					$('.holder-regime').addClass('hide');
					$('#regime').val('');
					$('#regime option[value!=""]').remove();
					$('#home-fee').html('');
					$('#host-fee').html('');
					$('#host-documents').html('');
					$('.regulated-profession').addClass('hide');
				};
			});
			$('#host').on('change',function(){
				if($(this).val()!=''){
					/*reset the rest*/
					$('#profession').val('');
					$('#profession option[value!=""]').remove();
					$('.holder-purpose').addClass('hide');
					$('#purpose').val('');
					$('#purpose option[value!=""]').remove();
					$('.holder-regime').addClass('hide');
					$('#regime').val('');
					$('#regime option[value!=""]').remove();
					$('#home-fee').html('');
					$('#host-fee').html('');
					$('#host-documents').html('');
					$('.regulated-profession').addClass('hide');
					
					$(xml).find("countries country[code='"+$(this).val()+"'] host_country professions profession").each(function(){
						var profession = $(this).attr('name');
						var id = $(this).attr('id');
						$('#profession').append($("<option></option>").attr("value",id).text(profession));
					});							
					$('.holder-profession').removeClass('hide');
					$('#holder-host-err-info').addClass('hide');
					$('#holder-home-info').removeClass('hide');
					$('#holder-host-info').removeClass('hide');				
				}
			});
			$('#profession').on('change',function(){
				if($(this).val()!=''){
					if ($(xml).find("countries country[code='"+$('#host').val()+"'] host_country professions profession[id='"+$('#profession').val()+"'] profession_regulated").text()==no[lang]){
						$('#holder-home-info').addClass('hide');
						$('#holder-host-info').addClass('hide');
						$('.regulated-profession').removeClass('hide');
						$('#purpose').val('');
						$('#purpose option[value!=""]').remove();
						$('.holder-regime').addClass('hide');
						$('#regime').val('');
						$('#regime option[value!=""]').remove();
						$('#home-fee').html('');
						$('#host-fee').html('');
						$('#host-documents').html('');
						//trancking profession not regulated simulation
						
					} else { 
						/*reset the rest*/
						$('#purpose').val('');
						$('#purpose option[value!=""]').remove();
						$('.holder-regime').addClass('hide');
						$('#regime').val('');
						$('#regime option[value!=""]').remove();
						$('#home-fee').html('');
						$('#host-fee').html('');
						$('#host-documents').html('');
						
						$(xml).find("countries country[code='"+$('#host').val()+"'] host_country professions profession[id='"+$(this).val()+"'] recognition_purpose").each(function(){
							var purpose = $(this).attr('name'); 
							var id = $(this).attr('id');
							$('#purpose').append($("<option></option>").attr("value",id).text(purpose));
						});
						$('.holder-purpose').removeClass('hide');
						$('.regulated-profession').addClass('hide');
						$('#holder-home-info').removeClass('hide');
						$('#holder-host-info').removeClass('hide');
					}
				};
			});
			$('#purpose').on('change',function(){
				if($(this).val()!=''){
					/*reset the rest*/
					$('#regime').val('');
					$('#regime option[value!=""]').remove();
					$('#home-fee').html('');
					$('#host-fee').html('');
					$('#host-documents').html('');
					$('.regulated-profession').addClass('hide');
					
					$('.holder-regime').removeClass('hide');
					var used_regimes=[];
					$(xml).find("countries country[code='"+$('#host').val()+"'] host_country professions profession[id='"+$('#profession').val()+"'] recognition_purpose[id='"+$(this).val()+"']  recognition_regime").each(function(){
						var regime = $(this).attr('name');
						var id = $(this).attr('id');
						if ($.inArray( id, used_regimes )==-1){
							if (id=='102928'){
								regim_text=yes[lang];
							} else {
								regim_text=no[lang];
							}
							$('#regime').append($("<option></option>").attr("value",id).text(regim_text));
							used_regimes.push(id);
						}
					});
				}
			});
			$('#regime').on('change',function(){
				if($(this).val()!=''){
					$('#holder-home-info').removeClass('hide');
					$('#holder-host-info').removeClass('hide');
					$('#home-fee').html('');
					$('#host-fee').html('');
					$('#host-documents').html('');
					$('.regulated-profession').addClass('hide');
					/*
					hasRegions=false;
					if (has_home_fee=$(xml).find("countries country[code='"+$('#home').val()+"'] home_country professions profession[id='"+$('#profession').val()+"'] recognition_purpose[id='"+$('#purpose').val()+"'] recognition_regime[id='"+$('#regime').val()+"']").length>1){
						hasRegions=true;
					}
					*/
					if ($(xml).find("countries country[code='"+$('#home').val()+"'] home_country professions profession[id='"+$('#profession').val()+"'] profession_regulated").text()==no[lang]){
						non_reg_profession=$(xml).find("countries country[code='"+$('#home').val()+"'] home_country professions profession[id='"+$('#profession').val()+"']");
						has_fee=$(non_reg_profession).find("fees").attr('has_fee');
						if (has_fee==yes[lang]){
							fixed_fee=$(non_reg_profession).find("fees").attr('fixed_fee');
							fees=$(non_reg_profession).find("fees");
							if (fixed_fee==yes[lang]){
								amount=$(fees).find("fee").text()+' '+$(fees).find("currency").text();
							} else {
								amount=$(fees).find("fee_min").text()+' '+$(fees).find("currency_min").text()+' - '+$(fees).find("fee_max").text()+' '+$(fees).find("currency_max").text();
							}
						} else {
							amount=no[lang];
						}
						$('#home-fee').append(amount);	
					} else {
						$(xml).find("countries country[code='"+$('#home').val()+"'] home_country professions profession[id='"+$('#profession').val()+"'] recognition_purpose[id='"+$('#purpose').val()+"'] recognition_regime[id='"+$('#regime').val()+"']").each(function(){
							amount='';
							has_fee=$(this).find("fees").attr('has_fee');
							if (has_fee==yes[lang]){
								fixed_fee=$(this).find("fees").attr('fixed_fee');
								fees=$(this).find("fees");
								if (fixed_fee==yes[lang]){
									amount=$(fees).find("fee").text()+' '+$(fees).find("currency").text();
								} else {
									amount=$(fees).find("fee_min").text()+' '+$(fees).find("currency_min").text()+' - '+$(fees).find("fee_max").text()+' '+$(fees).find("currency_max").text();
								}
							} else {
								amount=no[lang];
							}
							if ($(this).attr('region_id')!=''){
								fee='<strong>'+$(this).attr('region_name')+':</strong> '+amount+'<br/>';
							} else {
								fee=amount;
							}	
							$('#home-fee').append(fee);						
						});
					}
					
					$(xml).find("countries country[code='"+$('#host').val()+"'] host_country professions profession[id='"+$('#profession').val()+"'] recognition_purpose[id='"+$('#purpose').val()+"'] recognition_regime[id='"+$('#regime').val()+"']").each(function(){
						amount='';
						has_fee=$(this).find("fees").attr('has_fee');
						if (has_fee==yes[lang]){
							fixed_fee=$(this).find("fees").attr('fixed_fee');
							fees=$(this).find("fees");
							if (fixed_fee==yes[lang]){
								amount=$(fees).find("fee").text()+' '+$(fees).find("currency").text();
							} else {
								amount=$(fees).find("fee_min").text()+' '+$(fees).find("currency_min").text()+' - '+$(fees).find("fee_max").text()+' '+$(fees).find("currency_max").text();
							}
						} else {
							amount=no[lang];
						}
						if ($(this).attr('region_id')!=''){
							fee='<span class="fee_regions"><strong>'+$(this).attr('region_name')+'</strong>: '+amount+'</span>';
						} else {
							fee=amount;
						}	
						$('#host-fee').append(fee);						
						
						var documents='';
						documents += '<table>';
						if ($(this).attr('region_id')!=''){
							documents+='<strong>'+$(this).attr('region_name')+'</strong><br/>';
						} 
						$(this).find("documents document").each(function(){
							arrow='';
							if ($('#document-details #'+$(this).find('document_type').attr('id')).html()!='' && typeof $('#document-details #'+$(this).find('document_type').attr('id')).html() !== "undefined"){
								arrow='<span class="up-arrow"></span>';
							}
							/*put arrows for the documents that don't have their own descritpion but are attached to another description*/
							if ($(this).find('document_type').attr('id')=='103723' || $(this).find('document_type').attr('id')=='103724' || $(this).find('document_type').attr('id')=='103722'){
								arrow='<span class="up-arrow"></span>';
							}
							documents += '<tr><td id="cod-'+$(this).find('document_type').attr('id') +'"><div class="doc_name">'+$(this).find('document_type').text() +'</div><div class="doc_info"></div>'+arrow+'</td></tr>';
						});
						documents += '</table>';
						$('#host-documents').append(documents);
			
					});
					//add actions on document
					$('#host-documents table').on('click' , 'td', function(){
						if ($(this).children('.doc_info').html()==''){
							var cod=$(this).attr('id').split('-');
							/*over write code for documents that have the same description but no codes*/
							if (cod[1]=='103723' || cod[1]=='103724' || cod[1]=='103722'){
								cod[1]='103720';
							}
							$('#document-details #'+cod[1]).find('h4').remove();
							/*$('#document-details #'+cod[1]).find('.epc-translation-requirements').remove();*/
							doc_info=$('#document-details #'+cod[1]).html();
							if (doc_info!='' && typeof doc_info !== "undefined"){
								$(this).children('.doc_info').html(doc_info);
								$(this).addClass('doc_open');
							}
						} else {
							$(this).children('.doc_info').html('');
								$(this).removeClass('doc_open');
						}
					});
					
				};
			});
	}
	
	var h = location.hash ? location.hash.substring(1) : '';

	if ( h.length && ( $( '#main-article a[name=' + h + ']' ).length || ( h == 'country' && $( '#main-article div.toggle.countries' ).length ) ) ) {
		var a = $( '#in-page-nav a[href="#' + h + '"]' );
	
		anchorScrollOrAction( a.length ? $( a[0] ) : null, h, true );
	}
} );
	
function trackKindOfLink( h ) {
	if ( h && h.length && h.length > 2 ) {
		if ( h.indexOf( '#' ) == 0 ) {
			_paq.push( ['trackEvent', current_ye, 'In-page-link', h] );
		} else if ( h.indexOf( '/youreurope/' ) == 0 || ( h.indexOf( 'europa.eu/youreurope/' ) >= 7 && h.indexOf( 'europa.eu/youreurope/' ) <= 12 ) ) {
			if ( h.indexOf( '/citizens/' ) != -1 || h.indexOf( '/business/' ) != -1 ) {
				if ( ( h.indexOf( '/citizens/' ) != -1 && current_ye == 'Citizens' ) || ( h.indexOf( '/business/' ) != -1 && current_ye == 'Business' ) ) {
					_paq.push( ['trackEvent', current_ye, 'Internal-link', h] );
				} else {
					_paq.push( ['trackEvent', current_ye, 'Cross-link', h] );
				}
			} else {
				_paq.push( ['trackEvent', current_ye, 'YE-HP-link', h] );
			}
		} else if ( h.indexOf( 'ec.europa.eu/' ) >= 7 && h.indexOf( 'ec.europa.eu/' ) <= 12 ) {
			_paq.push( ['trackEvent', current_ye, 'EC-link', h] );
		} else {
			_paq.push( ['trackEvent', current_ye, 'External-link', h] );
		}
	}
}

function getDGCOMMSurvey() {
	$.getScript( 'https://ec.europa.eu/wel/surveys/wr_survey01/wr_survey.js', function( data, textStatus, jqxhr ) {
		console.log( 'Survey status=' + textStatus + ':' + jqxhr.status );
	} );
}

function setSplashPageLanguageMenu() {
	var lg_list = $( '#ye-language-selector ul a' );
	var lg_choice = $( '#ye-choose-language' ).text();
	
	$( '#hide-portal-selector' ).on( 'click', function( e ) {
		e.preventDefault();
		
		moveToTop = false;
		resetSplashPage();
		
		$( 'html, body' ).animate( { scrollTop : 0 }, 400, function() { not2ndTime = true; location.hash = ''; } );
	} );
	
	$.each( lg_list, function( i, obj ) {
		$( obj ).on( 'click', function( e ) {
			e.preventDefault();
			forceBlur( $( obj ) );
			
			moveToTop = false;
			location.hash = $( obj ).attr( 'lang' );
	
			$( 'html, body' ).animate( { scrollTop : 0 } );
		} );
		
		$( obj ).mouseenter( function() {
			$( '#ye-choose-language' ).html( $( obj ).attr( 'data-choose-language' ) );
		} );
		
		$( obj ).parent().parent().parent().mouseleave( function() {
			$( '#ye-choose-language' ).html( lg_choice );
		} );
	} );
	
	$( window ).on( 'hashchange', function( e ) { e.preventDefault(); checkSplashHash() } );
	checkSplashHash();
}

function resetSplashPage() {
	if ( !not2ndTime ) {
		removeActiveSplashLG();
		
		$( '#ye-choose-language' ).slideDown();
		$( '#ye-portal-selector' ).slideUp();
		
		if ( moveToTop ) $( 'html, body' ).scrollTop(0);
		else moveToTop = true;
	} else not2ndTime = false;
}

function checkSplashHash() {
	if ( location.hash != '' ) {
		hash_lg = location.hash.substring( 1, 3 );
		
		if ( accepted_lg.indexOf( hash_lg ) != -1 ) {
			selectSplashLanguage( $( '#ye-language-selector a[hreflang="' + hash_lg + '"]' ) );
		} else resetSplashPage();
	} else resetSplashPage();
}

function selectSplashLanguage( e ) {
	$( '#eu-ye-citizens' ).attr( 'href', 'https://europa.eu/youreurope/citizens/index_' + e.attr( 'lang' ) + '.htm' );
	$( '#eu-ye-business' ).attr( 'href', 'https://europa.eu/youreurope/business/index_' + e.attr( 'lang' ) + '.htm'  );
	$( '#eu-ye-citizens-label' ).html( e.attr( 'data-citizens' ) );
	$( '#eu-ye-business-label' ).html( e.attr( 'data-business' ) );
	$( '#eu-ye-citizens-title' ).html( e.attr( 'data-citizens-title' ) );
	$( '#eu-ye-business-title' ).html( e.attr( 'data-business-title' ) );
	$( 'html' ).attr( 'lang', e.attr( 'lang' ) );
	
	current_lg = e.attr( 'lang' );
	
	$( '#ye-choose-language' ).slideUp();
	
	removeActiveSplashLG();
	
	e.addClass( 'active' );
				
	if ( !$( '#ye-portal-selector' ).is( ':visible' ) ) $( '#ye-portal-selector' ).slideDown();
	
	if ( moveToTop ) $( 'html, body' ).scrollTop(0);
	else moveToTop = true;
}

function setSurveyInvitation( y, a, s, p ) {
	if ( current_ye ) {
		var survey_ye = current_ye == 'Business' ? 'YEB' : 'YEC';
		var survey_nm = survey_ye + 'Survey_' + y;
		
		if ( !getYECookie( survey_nm ) ) {
			var survey_pc = getYECookie( survey_nm + '_popup' );
		
			if ( !survey_pc ) {
				survey_pc = Math.round( Math.random() - 0.5 + a );
				
				setYECookie( survey_nm + '_popup', survey_pc, 0 );
			}
		
			if ( parseInt( survey_pc ) ) {
				var survey_st = s * 1000; // minimum milliseconds on the website before the survey invitation shows up
				var survey_pt = p * 1000; // milliseconds on a second or more page during a visit before the survey invitation shows up
				var survey_cd = parseInt( getYECookie( survey_nm + '_countdown' ) );
				
				var d = new Date();
				
				if ( survey_cd ) {
					survey_st = survey_st - d.getTime() + survey_cd;
					survey_st = survey_st < survey_pt ? survey_pt : survey_st;
					//console.log( survey_st );
				} else {
					setYECookie( survey_nm + '_countdown', d.getTime(), 0 );
					//console.log( true );
				}
				
				setTimeout( function() {
					$.ajax( { url: '/youreurope/business/survey/invitation/index_' + current_lg + '.htm', dataType: 'html', success: function( h ) {
						var invit_data = { text: $( h ).find( '#textFeedback' ).html(), ok: $( h ).find( '#bouton' ).text(), no: $( h ).find( '#bouton_close' ).text(), close: $( h ).find( '#close_link' ).text(), privacy: $( h ).find( '.privacy_statement' ).html() };
						
						$( 'body' ).append( '<div id="ye_popup_field"><div id="ye_popup_xy"><div id="ye_popup_container"><div id="ye_popup_header"><button id="ye_popup_close" title="' + invit_data.close + '" onclick="fadeSurveyInvitation(\'' + survey_nm + '\',' + y + ', true);">' + invit_data.close + '</button></div><div id="ye_popup_content">' + invit_data.text + '<a class="related-button" onclick="removeSurveyInvitation(\'' + survey_nm + '\',' + y + ');" href="https://ec.europa.eu/eusurvey/runner/' + survey_nm + '?surveylanguage=' + current_lg + '" target="_blank">' + invit_data.ok + '</a><div><button class="related-button" onclick="fadeSurveyInvitation(\'' + survey_nm + '\',' + y + ');">' + invit_data.no + '</button></div><div id="ye_popup_privacy">' + invit_data.privacy + '</div></div></div></div></div>' );
						
						$( '#ye_popup_field' ).fadeIn();
						$( '#ye_popup_container' ).animate( { marginBottom : 0 } );
						
						if ( typeof _paq !== 'undefined' ) {			
							_paq.push( ['trackEvent', current_ye, 'Survey-popup', 'Survey ' + y + ' invitation' ] );
						}
					} } );
				}, survey_st );
			}
		}
	}
}

function setYECookie( n, v, p ) {
	var e;
	
	if ( p ) {
		var d = new Date();
		d.setTime( d.getTime() + ( p * 86400000 ) );
		
		e = "expires="+ d.toUTCString();
	}
	
	document.cookie = n + '=' + v + ( p ? ';' + e : '' ) + ';path=/youreurope/' + current_ye.toLowerCase() + '/';
}

function getYECookie( s ) {
	var n = s + '=';
	var d = decodeURIComponent( document.cookie );
	var v = d.split( ';' );
	
	for( var i = 0; i < v.length; i++ ) {
		var c = v[i];
		
		while ( c.charAt(0) == ' ' ) {
			c = c.substring(1);
		}
		
		if ( c.indexOf( n ) == 0 ) {
			return c.substring( n.length, c.length );
		}
	}
	return '';
}

function destroyYECookie( s ) {
	document.cookie = s + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/youreurope/' + current_ye.toLowerCase() + '/';
}

function fadeSurveyInvitation( s, y, c ) {	
	$( '#ye_popup_field' ).fadeOut( 200 );
	$( '#ye_popup_container' ).animate( { marginBottom : 200 }, 200 );
	
	if ( !c ) {
		destroyYECookie( s + '_popup' );
		destroyYECookie( s + '_countdown' );
		setYECookie( s, 1, 30 );
		
		if ( typeof _paq !== 'undefined' ) {			
			_paq.push( ['trackEvent', current_ye, 'Survey-reject', 'Survey ' + y + ' invitation' ] );
		}
	}
}

function removeSurveyInvitation( s, y ) {	
	$( '#ye_popup_field' ).remove();
	
	destroyYECookie( s + '_popup' );
	destroyYECookie( s + '_countdown' );
	setYECookie( s, 1, 30 );
		
	if ( typeof _paq !== 'undefined' ) {			
		_paq.push( ['trackEvent', current_ye, 'Survey-accept', 'Survey ' + y + ' invitation' ] );
	}
}

function getUrlParameter ( p ) {
    var c_param = window.location.search.substring(1).split( '&' ),
        n_param,
        i;
	
    for ( i = 0; i < c_param.length; i++ ) {
        n_param = c_param[i].split( '=' );

        if ( n_param[0] === p ) {
            return n_param[1] === undefined ? true : decodeURIComponent( n_param[1] );
			break;
		}
    }
}

function checkYEPortal() {
	current_loc = location.href.split( '/' );
	
	if ( current_loc.length > 5 ) {			
		var str = String( current_loc[4] ).replace( '-', ' ' );
		
		if ( str == 'business' || str == 'citizens' ) {
			current_ye = firstLetterToUpperCase( str );
		}
	}
	
	current_lg = $( 'html' ).attr( 'lang' );
}

function removeActiveSplashLG() {
	var act = $( '#ye-language-selector .active' );
	
	if ( act.length === 1 ) {
		$( act[0] ).removeClass( 'active' );
	}
}

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function eenLoadTowns() {
	cities = $( '#country-cities li ul.' + $( '#partner-country' ).val() + ' li' );
	
	$( '#partner-city .dynamic-option' ).remove();	
	$.each( cities, function( i, obj ) {
		$( '#partner-city' ).append('<option value="' +  $( obj ).attr( 'class' ) + '" class="dynamic-option">' + $( obj ).html() + '</option>');
	});
}

function disableForm( f ) {
	$( f + ' input' ).prop("disabled", true);
	$( f + ' select' ).prop("disabled", true);
	$( f + ' textarea' ).prop("disabled", true);
}

function hideForm( form ) {
	$( form ).append( '<div id="form-elements-to-erase"></div>' )
	$( form ).find( '>*' ).not( '.status' ).appendTo( '#form-elements-to-erase' );
	$( '#form-elements-to-erase' ).slideUp( 100 );
	$( 'html, body' ).animate( { scrollTop : $( '#feedback-bar' ).offset().top - jump_c } );
}

function errorEENForm() {
	$( '#enquiryError' ).show();
	$( 'html, body' ).animate( { scrollTop : $( '#form-messages' ).offset().top - jump_c } );
	//setTimeout( function() { $( 'html, body' ).scrollTop(0); location.reload() }, 5000 );
}

function checkInputText( t ) {
	if ( $( t ).val().length ) {
		$( t ).removeClass( 'error' );
		
		totCnt++;
	} else {
		$( t ).addClass( 'error' );
	}
	
	$( t ).change( function() { checkInputText( t ); } );
	
	return $( t ).val().replace(/'/g,'&apos;');
}

function checkEmail( a ) {
	var r = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	if ( $( a ).val().length ) {
		if ( r.test( $( a ).val() ) ) {
			$( a ).removeClass( 'error' );
			$( '#enquiryEmail' ).hide();
			
			vEmail = 1;
			totCnt++;
		} else {
			$( a ).addClass( 'error' );
			$( '#enquiryEmail' ).show();
			
			vEmail = 0;
		}
	} else {
		$( a ).addClass( 'error' );
		$( '#enquiryEmail' ).hide();
		
		vEmail = 1;
	}
	
	$( a ).change( function() { checkEmail( a ); } );
	
	return $( a ).val().replace(/'/g,'&apos;');
}

function checkSelect( s ) {
	if ( $( s ).val() != $( $( s ).find( 'option' )[0] ).attr( 'value' ) ) {
		$( s ).removeClass( 'error' );
		
		totCnt++;
	} else {
		$( s ).addClass( 'error' );
	}
	
	$( s ).change( function() { checkSelect( s ); } );
	
	return $( s ).val().replace(/'/g,'&apos;');
}

function checkRadio( r ) {
	var l = $( r );
	var v;
	
	$.each( l, function( i, e ) {
		if( $( e ).prop( 'checked' ) ) {
			v = $( e ).val().replace(/'/g,'&apos;');
		}
	} );
	
	$.each( l, function( i, e ) {
		if ( v ) {
			$( e ).removeClass( 'error' );
			$( e ).unbind();
		} else {
			$( e ).addClass( 'error' );
			$( e ).change( function() { checkRadio( r ); } );
		}
	} );
	
	if ( v ) totCnt++;
	
	return v;
}

function utf8_to_b64( str ) {
	return btoa( unescape( encodeURIComponent( str ) ) ).toString();
}

// Resize actions
$( window ).on( 'resize', function() {
	resetWinVariables();
	setLangMenuPosition();
	updateBreadcrumbDisplay();
	updateSideMenuPosition();
	
	if ( side_u ) sideMenuLeftPosition();
	
	if ( open_g ) {
		if ( desk_d ) fullWidth( open_g );
		else open_g.width( 'auto' );
	}
} );

// On scroll actions
$( window ).on( 'scroll', function() {
	if ( !home_p && !splash_page && !sdg ) resetTopElementsPositions();
	updateSideMenu();
	updateSideMenuPosition();
	
	prev_y = location.hash != hash_c ? prev_y : $( 'html, body' ).scrollTop();
	hash_c = location.hash;
} );

function setSiteMaps() {
	var tg = $( '#main-article div.toggle-content ul.toggle-group' );
	
	if ( tg.length ) {
		$.each( tg, function( y, z ) {
			var gc = $( z ).find( 'li' );
			
			if ( gc.length ) $.each( gc, function( i, e ) {
				var ct = $( e ).find( '> ul' );
				
				if ( ct.length == 1 ) {
					$( ct[0] ).hide();
					$( e ).prepend( '<button id="open-section-' + y + '-' + i + '" class="open-section close"></button>' );
					
					$( '#open-section-' + y + '-' + i ).on( 'click', function( ev ) {
						$( '#open-section-' + y + '-' + i ).toggleClass( 'close' );
						$( '#open-section-' + y + '-' + i ).next().toggleClass( 'bold' );
						
						if ( $( ct[0] ).is( ':visible' ) ) $( ct[0] ).hide();
						else $( ct[0] ).show();
					} );
				} else {
					$( e ).prepend( '<div class="no-child"></div>' );
				}
			} );
		} );
		
		$( '#display-business' ).on( 'click', function() { sitemapToggleAll( 'business', true ); } );
		$( '#collapse-business' ).on( 'click', function() { sitemapToggleAll( 'business', false ); } );
		$( '#display-citizens' ).on( 'click', function() { sitemapToggleAll( 'citizens', true ); } );
		$( '#collapse-citizens' ).on( 'click', function() { sitemapToggleAll( 'citizens', false ); } );
	}
}

function sitemapToggleAll( s, d ) {
	var ul = $( '#sitemap-' + s ).find( 'ul' );
	
	$.each( ul, function( i, e ) {
		$( e )[ d ? 'show' : 'hide' ]();
	} );
	
	var os = $( '#sitemap-' + s ).find( '.open-section' );
	
	$.each( os, function( i, e ) {
		$( e )[ d ? 'removeClass' : 'addClass' ]( 'close' );
		$( e ).next()[ !d ? 'removeClass' : 'addClass' ]( 'bold' );
	} );
	
	$( '#display-' + s )[ !d ? 'show' : 'hide' ]();
	$( '#collapse-' + s )[ d ? 'show' : 'hide' ]();
}

function updateSideMenu() {
	if ( side_m ) {
		var t = scrl_t + 200;
		
		if ( !left_p ) {
			if ( t >= $( 'a[name=' + side_a[0] + ']' ).offset().top && t < $( '#main-article' ).offset().top + $( '#main-article' ).height() ) {
				$.each( side_a, function( i, v ) {
					if ( $( '#in-page-nav #' + v ).is( ':visible' ) && $( 'a[name=' + v + ']' ).offset().top && t >= $( 'a[name=' + v + ']' ).offset().top - ( inte_c && $( 'a[name=' + v + ']' ).offset().top > $( '#interactive-content' ).offset().top + 50 ? 196 : 0 ) ) {
						if ( !side_a[i+1] || t < $( 'a[name=' + side_a[i+1] + ']' ).offset().top || ( !$( 'a[name=' + side_a[i+1] + ']' ).offset().top && $( 'a[name=' + v + ']' ).parent().is( 'h2, h3' ) ) ) {
							$( '#in-page-nav' ).find( 'a.active' ).removeClass( 'active' );
							$( '#' + v ).addClass( 'active' );
						}
					}
				} );
			} else $( '#in-page-nav' ).find( 'a.active' ).removeClass( 'active' );
		}
	}
}

function updateSideMenuPosition() {
	if ( side_m && desk_d ) {
		
		side_h = $( '#in-page-nav' ).outerHeight();
		
		if ( scrl_t > side_t - jump_c ) {
			if( scrl_t > $( '#footer-content' ).offset().top - side_h - jump_c - 35 ) {
				$( '#in-page-nav' ).css( { 'position' : 'absolute', 'top' : $( '#footer-content' ).offset().top - $( '#main-content' ).offset().top - side_h - 35, 'left' : -15 } );
				
				scrl_u = true;
				side_u = false;
			} else {
				$( '#in-page-nav' ).css( { 'position' : 'fixed', 'top' : jump_c } );
				
				if ( scrl_u ) {
					sideMenuLeftPosition();
					scrl_u = false;
				}
				side_u = true;
			}
		} else {
			$( '#in-page-nav' ).css( { 'position' : 'absolute', 'top' : 110, 'left' : -15 } );
			
			scrl_u = true;
			side_u = false;
		}
	}
}

function sideMenuLeftPosition() {
	$( '#in-page-nav' ).css( 'left', $( '#main-content' ).offset().left - 15 );
}

// Reset variables realted to device/window size
function resetWinVariables() {
	var prev_d = desk_d;
	
	wind_w = $( window ).outerWidth();
	smrt_d = wind_w <= 640;
	desk_d = wind_w > 1024;
	
	if ( desk_d ) {
		jump_c = home_p ? 0 : 107;
		
		if ( side_m ) $( '#in-page-nav' ).show();
		$( '#eu-ye-navigation' ).css( 'height', 55 );
		if ( home_p ) $( '#eu-ye-navigation' ).hide();
		fitMainNavigation();
		
		if ( open_g ) open_g.width( 0 );
		if ( !prev_d && home_p ) resetDeskHomeNavigation();
	} else {
		jump_c = home_p ? 0 : 49;
		
		if ( side_m ) $( '#in-page-nav' ).hide();
		$( '#eu-ye-navigation' ).css( 'height', $( window ).height() - 49 );
		resetButtonsWidths();
		
		if ( prev_d && home_p ) resetMobileHomeNavigation();
	}
	
	if ( menu_o && !home_p && !splash_page ) {
		if ( !smrt_d ) {
			$( 'html, body' ).css( 'overflow', 'auto' );
			
			if ( scrl_t > scrl_m ) {
				$( 'html, body' ).scrollTop( scrl_m );
				resetTopElementsPositions();
			}
		} else {
			$( 'html, body' ).css( 'overflow', 'hidden' );
			
			if ( scrl_t < open_t ) {
				$( 'html, body' ).scrollTop( open_t );
				resetTopElementsPositions();
			}
		}
	}
	
	docu_w = $( document ).width();
	docu_w = desk_d && docu_w < 1180 ? 1180 : docu_w;
	open_t = $( '#header-content' ).outerHeight() - $( '#eu-ye-page-header' ).outerHeight() - 49;
	
	if ( smrt_d ) $( '#switch-site' ).appendTo( '#switch-recipient' );
	else {
		if ( home_p || sect_p ) $( '#switch-site' ).appendTo( '#eu-ye-page-header .centered' );
		else $( '#switch-site' ).appendTo( '#eu-ye-page-header' );
	}
	
	adaptMenuStyle();
}

function planInPageMenu() {
	if ( !inte_t ) {
		var a = $( '#main-article' );
		var b = $( '#main-related' );
		var c = $.merge( a, b ).find( 'h2' );
		var d = $.merge( a, b ).find( 'h3' );
		var e = $.merge( a, b ).find( 'h2, h3' );
		var g = [];
		
		if ( !inte_c && e.length > 12 ) {
			e = c.length ? c.slice( 0, 10 ) : d.slice( 0, 10 );
		}
		
		if ( e.length ) {
			$.each( e, function( i, v ) {
				if( $( v ).hasClass( 'functional-toggle' ) ) g[i] = $( v ).attr( 'id' );
			} );
			
			if ( $( '#in-page-nav' ).length && ( a.outerHeight() > 500 || g.length ) ) setInPageMenu( e, g, '#in-page-nav' );
		}
		
		smoothMoveToAnchors();
	}
}

function setInPageMenu( e, g, d ) {
	var m = $( d ).html() + '<ul>';
	var f = false;
	var h = false;
	var s = false;
	var p = false;
	var x = 0;
	
	side_a = [];
	
	$.each( e, function( i, v ) {
		if ( !$( v ).hasClass( 'brexit-title' ) && !$( v ).hasClass( 'countries' ) ) {
			var c = $( v ).text().replace( /[:;,.\s]$/g, '' ).replace( /\r?\n|\r/g, '' );
			var n = 'shortcut-' + i + '-' + c.replace( /[^\w\s]/gi, '' ).replace( / +/g, '-' ).toLowerCase();
			var t = g[i] ? ' onclick="launchToggler(\'#' + g[i] + '\')"' : '';
			
			if ( p && $( v ).is( 'h3' ) && !$( v ).parent().hasClass( 'toggle-content' ) ) s = false;
			
			if ( $( v ).is( 'h3' ) && s ) m += h ? '</li>' : '<ul>';
			if ( $( v ).is( 'h2' ) && h ) m += '</ul></li>';
			
			p = $( v ).is( 'h2' ) && $( v ).parent().hasClass( 'toggle-content' );
			m += '<li' + ( g[i] ? ' id="' + g[i] + '_m"' : '' ) + '><a href="#' + n + '"' + t + ( $( v ).is( 'h2' ) && $( e[i+1] ).is( 'h3' )&& !$( e[i+1] ).hasClass( 'countries' ) && !$( e[i+1] ).hasClass( 'brexit' ) && !p ? ' class="sub-content"' : '' ) + ' id="' + n + '">' + c + '</a>';
			h = $( v ).is( 'h3' ) && s;
			
			if ( !s && $( v ).is( 'h2' ) ) s = true;
			
			side_a[x] = n;
			x++;
			
			$( v ).html( '<a name="' + n + '" class="anchor"></a>' + $( v ).html() );
		}
	} );
	
	side_m = Boolean( side_a.length );
	
	if ( side_m ) {
		$( d ).html( m + '</li></ul>' );
		if ( desk_d ) $( d ).show();
	
		updateInPageMenu();
		$( '#main-content' ).addClass( 'tiny' );
	}
}

// Prevent default behaviour for inside page links
function smoothMoveToAnchors(){
	$.merge( $( '#in-page-nav a' ), $( '#main-article a' ) ).on( 'click', function( e ) {
    	if ( this.hash !== '' && this.hash === $( this ).attr( 'href' ) ) {
			var h = this.hash.substring(1);
			
			if ( h.length && $( '#main-article a[name=' + h + ']' ).length ) {
				e.preventDefault();
				anchorScrollOrAction( $( e.target ), h );
				
				if ( !inte_c ) {
					hash_e = 0;
					location.hash = h;
				}
			}
		}
	});
}

function anchorScrollOrAction( t, h, c ) {
	if ( inpm_a[ h ] && {}.toString.call( inpm_a[ h ] ) === '[object Function]' ) {
		inpm_a[ h ]();
	} else {
		if ( c && t && t.attr( 'onclick' ) ) {
			var c = t.attr( 'onclick' );
			var f = window[ c.substring( 0, c.indexOf( '(' ) ) ];
			var p = c.substring( c.indexOf( '(' ) + 2, c.indexOf( ')' ) - 1 ).split( ',' );
			
			if ( typeof f === 'function' ) f.apply( null, p );
		}
		
		if ( $( '#main-article a[name=' + h + ']' ).length || ( h == 'country' && $( '#main-article div.toggle.countries' ).length ) ) {
			
			var targ_o = h == 'country' ? $( $( '#main-article div.toggle.countries' )[0] ) : $( '#main-article a[name=' + h + ']' );
			var last_p = $( targ_o.parentsUntil( '#main-article' )[0] );
				
			if ( last_p.hasClass( 'toggle-content' ) && !last_p.hasClass( 'showed' ) ) {
				last_p.prev().addClass( 'showing' );
				last_p.addClass( 'showed' );
			}
			if ( h == 'country' && !targ_o.hasClass( 'showing' ) ) {
				targ_o.addClass( 'showing' );
				targ_o.next().addClass( 'showed' );
			}
			
			var sscrl_t = inte_c && targ_o.offset().top > $( '#interactive-content' ).offset().top + 50 ? scrl_e + 196 : jump_c;
			
			left_p = t ? Boolean( $( '#in-page-nav' ).find( t ).length ) : false;
			
			$( 'html, body' ).animate( { scrollTop : targ_o.offset().top - sscrl_t }, 400, function() {
				if ( left_p ) {
					$( '#in-page-nav a.active' ).removeClass( 'active' );
					t.addClass( 'active' );
					t.blur();
				}
				$( 'html, body' ).scrollTop( targ_o.offset().top - sscrl_t );
				
				left_p = false;
			} );
		}
	}
}

$( window ).on( 'hashchange', function( e ) {
	e.preventDefault();
	$( 'html, body' ).scrollTop( prev_y );
	
	if ( !inte_c && hash_e ) {
		var h = location.hash ? location.hash.substring(1) : '';
		
		if ( h.length && ( $( '#main-article a[name=' + h + ']' ).length || ( h == 'country' && $( '#main-article div.toggle.countries' ).length ) ) ) {
			var a = $( '#in-page-nav a[href="#' + h + '"]' );
			
			anchorScrollOrAction( a.length ? $( a[0] ) : null, h, true );
		} else $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	} else {
		hash_e = 1;
	}
} );

// Language selection tool setting
function setLangMenu() {
	var p = $( '#eu-languages-menu' );
	
	$( '#eu-languages-toggle' ).on( 'click', function() {
		if( p.css( 'display' ) == 'none' ) {
			p.slideDown( 200 );
			
			lang_o = true;
		} else {
			p.slideUp( 200 );
			
			lang_o = false;
		}
	} );
	
	$( '#eu-close-languages-menu' ).on( 'click', function() { 
		p.slideUp( 200 );
		
		lang_o = false
	} );
}

// Force closure of language menu
function closeLangMenu() {
	if( lang_o ) {
		$( '#eu-languages-menu' ).slideUp( 200 );
		
		lang_o = false
	}
}

// Responsive action: adapt the language menu width and postion
function setLangMenuPosition() {
	var p = $( '#eu-languages-menu' );
	
	if ( desk_d && !sdg ) p.css( 'right', Math.round( (  $( '#eu-languages-toggle' ).outerWidth() - p.outerWidth() ) / 2 ) + 524 );
	else p.css( 'right', '0' );
	
	p.css( 'width', docu_w < 476 ? docu_w - 32 : 444 );
}

// Storage of the breadcrumb values
function getBreadcrumbElements() {
	path_a = $( '#eu-breadcrumb' ).find( 'a' );
	
	if ( path_a.length ) {
		$.each( path_a, function( i, e ) {
			path_l[i] = $( e ).text();
		} );
	}
}

// Hide items of the breadcrumb when not enough width to display all
function updateBreadcrumbDisplay() {
	if ( desk_d && !home_p && !sect_p && !splash_page ) {
		var l = path_r.length;
		
		if ( l ) {
			$.each( path_r, function( n, e ) {
				n = path_r[l-1];
				
				$( path_a[n] ).html( path_l[n] );
				$( path_a[n] ).removeAttr( 'title' );
				
				l--;
			} );
		}
		
		var p = $( '#eu-breadcrumb' ).outerWidth();
		var s = $( '#switch-site' ).outerWidth();
		var i = 2;
		var j = 0;
		var k = path_a.length - 1;
		
		if ( p > 1140 || ( docu_w > 1140 ? ( docu_w - 1140 ) / 2 : 0 ) + p + s + 20 > docu_w ) {
			path_r = [];
			
			while ( ( p > 1140 || ( docu_w > 1140 ? ( docu_w - 1140 ) / 2 : 0 ) + p + s + 20 > docu_w ) && i < k ) {
				$( path_a[i] ).html( '...' );
				$( path_a[i] ).attr( 'title', path_l[i] );
				
				path_r[j] = i;
				p = $( '#eu-breadcrumb' ).outerWidth();
				i++;
				j++;
			}
		}
	}
}

// Function to adapt the size of every main navigation element
function fitMainNavigation() {
	if ( !home_p && !splash_page ) {
		if ( menu_m.length && !menu_z ) {
			var s = 60;
			var h = 1;
			var t = 0;
			var v = [];
			var w = [];
			menu_z = [];
			menu_n = [];
			menu_c = [];
			menu_x = [];
			
			$.each( menu_m, function( i, e ) {
				$( e ).html( $( e ).text() );
				
				var u = $( e ).width();
				var p = $( e ).text().split( ' ' ).length;
				
				s += u + 60;
				h = p > h ? p : h;
				
				v.push( 18 );
				w.push( p > 1 ? u : 0 );
				menu_z.push( u );
				menu_n.push( p );
				menu_c.push( p );
				menu_x.push( 0 );
			} );
			
			while ( s > 1140 && h > 1 ) {
				t = Math.max.apply( Math, w );
				h = 1;
				
				if ( t == 0 ) break;
				
				$.each( menu_m, function( i, e ) {
					if ( w[i] == t ) {
						$( e ).css( 'width', t - 5 );
						$( e ).html( '<span>' + $( e ).text() + '</span>' );
						
						var u = $( e ).find( 'span' )[0].getBoundingClientRect().width;
						var y = $( e ).find( 'span' ).height();
						
						menu_x[i] = menu_x[i] + 1;
						menu_n[i] = v[i] < y ? menu_n[i] - 1 : menu_n[i];
						v[i] = y;
						w[i] = menu_n[i] > 1 && menu_x[i] < 3 ? u : 0;
						menu_z[i] = u;
						
						s = s - t + u;
						
						$( e ).html( $( e ).text() );
					}
					
					h = menu_n[i] > h ? menu_n[i] : h;
				} );
			}
			
			menu_d = ( 1140 - s ) / menu_m.length;
		}
		
		if ( menu_z ) setButtonsWidths();
	}
}

// Reset menu buttons widths when back to desktop size
function setButtonsWidths() {
	var w = 60;
	
	$.each( menu_m, function( i, e ) {
		var l = menu_c[i] - menu_n[i];
		
		$( e ).css( 'width', menu_z[i] + ( menu_d > 0 ? menu_d : 0 ) );
		$( e ).css( 'padding-top', ( 36 - l * 18 ) / 2 );
		$( e ).css( 'padding-bottom', ( 36 - l * 18 ) / 2 + 1 );
		$( e ).css( 'height', ( l + 1 ) * 18 );
		$( e ).css( 'visibility', 'visible' );
		
		w += $( e ).outerWidth();
	} );
	
	if( w > 1140 ) $( '#eu-ye-navigation' ).find( 'li.home a.menu' ).css( 'width', 20 - Math.ceil( w - 1140 ) );
}

// Reset menu buttons widths when back to smaller size
function resetButtonsWidths() {
	if ( !home_p && !splash_page ) {
		$.each( menu_m, function( i, e ) {
			$( e ).css( 'width', 'auto' );
			$( e ).css( 'padding-top', 17 );
			$( e ).css( 'padding-bottom', 17 );
			$( e ).css( 'height', 15 );
			$( e ).css( 'visibility', 'visible' );
		} );
	}
}

// Add check mark on current page reference in navigation
function checkCurrent() {
	var e = $( '#eu-ye-navigation' ).find( 'li.active' );
	
	if ( e.length ) {
		var a = $( e[ e.length - 1 ] ).find( 'a' );
		
		$( a[0] ).html( $( a[0] ).text() + '<span class="current"></span>' );
	}
}

// Set home navigation
function setHomeNavigation() {	
	navi_l = menu_m.length;
	
	$.each( menu_m, function( i, a ) {
		var g = $( '#menu-group-' + ( i + 1 ) );
		
		$( a ).on( 'click', function( e ) {
			if ( !desk_d ) {
				e.preventDefault();
				
				if ( $( a ).hasClass( 'open' ) ) {
					g.slideUp( 200, function() { $( 'html, body' ).animate( { scrollTop : 0 }, 400 ); hideSubGroup( false ); }  );
					$( a ).removeClass( 'open' );
					
					home_a = null;
					home_g = null;
				} else {
					g.slideDown( 200, function() { $( 'html, body' ).animate( { scrollTop : $( a ).offset().top }, 400 ) } );
					$( a ).addClass( 'open' );
					
					if ( home_a && home_a != $( a ) ) {
						home_g.slideUp( 200, function() { hideSubGroup( false ); } );
						home_a.removeClass( 'open' );
					}
					home_a = $( a );
					home_g = g;
				}
			}
		} );
	} );
}

// Reset home desktop navigation
function resetDeskHomeNavigation() {
	home_a = null;
	home_g = null;
					
	$.each( menu_m, function( i, a ) {
		$( a ).removeClass( 'open' );
		$( '#menu-group-' + ( i + 1 ) ).show();
	} );
	
	hideSubGroup( false );
}

// Reset home mobile device navigation
function resetMobileHomeNavigation() {
	$.each( menu_m, function( i, a ) {
		$( '#menu-group-' + ( i + 1 ) ).hide();
	} );
}

// Set the general navigation
function setNavigation() {
	var h = $( '#eu-ye-navigation' ).find( 'li.home a.menu' );
	var n = $( '#eu-ye-navigation' ).find( 'ul:first-child' );
	var o = $( '#eu-ye-toggle-menu' );
	var c = 0;
	
	navi_l = menu_m.length;
	
	$.each( menu_m, function( i, a ) {
		var g = $( '#menu-group-' + ( i + 1 ) );
		
		$( a ).click( function( e ) { if ( !desk_d ) { e.preventDefault(); if ( g == open_g ) { hideGroup(); forceBlur( $( a ) ); } else { displayGroup( $( a ), g ); } } } );
		if ( g ) $( a ).mouseenter( function() { if ( desk_d ) displayGroup( $( a ), g ); } );
		
		if ( $( a ).hasClass( 'active' ) ) {
			preo_a = $( a );
			preo_g = g;
		}
		c++;
	} );
	
	if ( h && c ) h.mouseenter( function() { if ( desk_d ) hideGroup(); } );
	if ( n && c ) n.mouseleave( function() { if ( desk_d ) hideGroup(); } );
	if ( o && n ) o.click( openSmartMenu );
}

// Show panel function
function displayGroup( a, g, e ) {
	e = e === undefined ? true : e;
	
	if ( open_g && g != open_g ) hideGroup();
	if ( desk_d ) fullWidth( g );
	
	open_a = a;
	open_c = a.parent().parent();
	open_g = g;
	
	forceCenter( g );
	a.addClass( 'open' );
	open_c.addClass( 'fade' );
	
	if ( e ) forceBlur( a );
	
	if ( !e || desk_d ) {
		g.show();
		adaptMenuStyle();
	} else g.slideDown( 400, adaptMenuStyle );
}

// Hide panel function
function hideGroup( e ) {
	e = e === undefined ? true : e;
	
	if ( open_g ) {
		if ( !e || desk_d ) {
			open_g.hide();
			adaptMenuStyle();
		} else open_g.slideUp( 400, adaptMenuStyle );
		
		open_g.width( 'auto' );
		open_a.removeClass( 'open' );
		open_c.removeClass( 'fade' );
		
		open_a = null;
		open_c = null;
		open_g = null;
		
		if ( desk_d && menu_o ) {
			menu_o = false;
			open_i = 0;
			
			$( '#eu-ye-toggle-menu' ).removeClass( 'close-it' );
			$( '#eu-ye-navigation' ).removeClass( 'display' );
		}
	}
}

// Set the sub navigation
function setSubNavigation() {
	$.each( menu_s, function( i, a ) {	
		$( a ).attr( 'id', 'extra-btn-' + ( i + 1 ) );
		$( a ).attr( 'onclick', 'displaySubGroup(' + ( i + 1 ) + ', event);' );
		$( a ).parent().find( 'ul' ).attr( 'id', 'extra-menu-' + ( i + 1 ) );
		
		if ( $( a ).parent().hasClass( 'active' ) ) preo_i = i + 1;
	} );
}

// Show panel function
function displaySubGroup( i, e ) {
	if ( !desk_d ) {
		if ( e ) e.preventDefault();
		
		if ( i == open_i ) hideSubGroup();
		else {
			if ( open_i ) hideSubGroup();
			
			if ( e ) {
				forceBlur( $( '#extra-btn-' + i ) );
				$( '#extra-menu-' + i ).slideDown( 200, adaptMenuStyle );
			} else {
				$( '#extra-menu-' + i ).show();
				adaptMenuStyle();
			}
			
			$( '#extra-btn-' + i ).addClass( 'show-it' );
			
			open_i = i;
		}
	}
}

// Hide sub panel function
function hideSubGroup( e ) {
	e = e === undefined ? true : e;
	
	if ( open_i ) {
		$( '#extra-btn-' + open_i ).removeClass( 'show-it' );
		
		if ( e ) {
			forceBlur( $( '#extra-btn-' + open_i ) );
			$( '#extra-menu-' + open_i ).slideUp( 200, adaptMenuStyle );
		} else {
			$( '#extra-menu-' + open_i ).hide();
			adaptMenuStyle();
		}
		
		open_i = 0;
	}
}

// blurSelectedElement
function forceBlur( e ) {
	setTimeout( function() { e.blur(); }, 200 );
}

// Open small device menu
function openSmartMenu() {
	if ( !desk_d ) {
		if ( $( '#eu-ye-toggle-menu' ).hasClass( 'close-it' ) ) {
			if ( smrt_d ) $( 'html, body' ).animate( { scrollTop : scrl_m }, 400 );
			
			hideGroup( false );
			hideSubGroup( false );
			$( 'html, body' ).css( 'overflow', 'auto' );
			
			menu_o = false;
		} else {
			if ( smrt_d ) {
				if ( scrl_t < open_t ) $( 'html, body' ).animate( { scrollTop : open_t }, 400 );
				
				$( 'html, body' ).css( 'overflow', 'hidden' );
			}
			if ( preo_a && preo_g ) displayGroup( preo_a, preo_g, false );
			if ( preo_i ) displaySubGroup( preo_i, false );
			
			scrl_m = scrl_t;
			menu_o = true;
		}
	
		$( '#eu-ye-toggle-menu' ).toggleClass( 'close-it' );
		$( '#eu-ye-navigation' ).toggleClass( 'display' );
		adaptMenuStyle();
	}
}

// Reset top elements positions when scrolling
function resetTopElementsPositions() {
	scrl_t = $( document ).scrollTop();
	scrl_m = !smrt_d ? scrl_t : scrl_m;
	
	if ( scrl_t >= open_t ) {
		$( '#eu-ye-page-header' ).addClass( 'fixed' );
		$( '#eu-ye-navigation' ).addClass( 'fixed' );
		$( '#main-content' ).addClass( 'jump' );
		closeLangMenu();
	} else {
		$( '#eu-ye-page-header' ).removeClass( 'fixed' );
		$( '#eu-ye-navigation' ).removeClass( 'fixed' );
		$( '#main-content' ).removeClass( 'jump' );
	}
	
	updateBreadcrumbDisplay();
}

// Set toggle contents
function setToggleContents( p ) {
	var t = $( p ).find( '.toggle' );
	
	if ( t.length ) {		
		$.each( t, function( i, e ) {
			if ( $( e ).next().hasClass( 'toggle-content' ) ) {
				$( e ).addClass( 'functional-toggle' );
				$( e ).attr( 'id', 'functional-toggle-' + ( i + 1 ) );
				$( e ).on( 'click', function( v ) {
					if ( $( e ).is( 'h2' ) && ( site_m || ntnl_p ) ) {
						launchToggler( '#' + $( e ).attr( 'id' ) );
					} else {
						$( e ).toggleClass( 'showing' );
						$( e ).next().toggleClass( 'showed' );
						
						var sscrl_t = inte_c && $( e ).offset().top > $( '#interactive-content' ).offset().top + 50 ? scrl_e + 196 : jump_c;
						
						if ( !$( e ).hasClass( 'countries' ) && $( e ).hasClass( 'showing' ) ) scrollWhenOpen( $( e ).offset().top - sscrl_t );
						updateInPageMenu();
					}
				} );
			}
		} );
	}
}

function launchToggler( e ) {
	if ( $( e ).is( 'h2' ) && ( site_m || ntnl_p ) ) {
		if ( !$( e ).hasClass( 'showing' ) ) {
			if ( tgle_h && tgle_h != e ) {
				$( tgle_h ).next().slideUp();
				$( tgle_h ).removeClass( 'showing' );
			}
			var sscrl_t = inte_c && $( e ).offset().top > $( '#interactive-content' ).offset().top + 50 ? scrl_e + 196 : jump_c;
			
			$( e ).addClass( 'showing' );
			$( e ).next().slideDown( 400, function() { scrollWhenOpen( $( e ).offset().top - sscrl_t ); } );
			
			tgle_h = e;
		} else {
			$( e ).next().slideUp( 400, function() { scrollWhenOpen( 0 ); } );
			$( e ).removeClass( 'showing' );
			
			tgle_h = '';
		}
	} else {
		$( e ).addClass( 'showing' );
		$( e ).next().addClass( 'showed' );
		
		var sscrl_t = inte_c && $( e ).offset().top > $( '#interactive-content' ).offset().top + 50 ? scrl_e + 196 : jump_c;
		scrollWhenOpen( $( e ).offset().top - sscrl_t );
		
		side_h = $( '#side-menu' ).outerHeight();
	}
	updateInPageMenu();
}

function scrollWhenOpen( n ) {
	left_p = true;
	
	$( 'html, body' ).animate( { scrollTop : n }, 400, function() { left_p = false; } );
}

// Show Feedback form
function feedbackDisplay(){
	$( '#feedback' ).on( 'click', function() {
		$( '#feedback' ).toggleClass( 'showing' );
		$( '#feedback-form' ).toggleClass( 'showed' );
	} );
}

// Toggle related content
function relatedDisplay( b, c, d ){
	if ( $( b ).length ) {
		$( b ).on( 'click', function() {
			if ( typeof _paq !== 'undefined' ) {
				_paq.push( ['trackEvent', current_ye, 'Display', d] );
			}
			
			if ( $( this ).attr( 'href' ) && $( this ).attr( 'href' ).indexOf( 'http' ) !== -1 ) {
				location.href = $( this ).attr( 'href' );
			} else {
				$( c ).toggleClass( 'showing' );
			}
		} );
	}
}

// Add/remove alternative class from body element
function adaptMenuStyle() {
	if ( !desk_d && $( '#eu-ye-navigation' ).find( 'ul.centered' ).outerWidth() > 420 ) $( '#eu-ye-navigation' ).addClass( 'alternative' );
	else $( '#eu-ye-navigation' ).removeClass( 'alternative' );
}

// Add a centered parent element 
function forceCenter( e ) {
	var c = e.html();
	
	if ( c.substring( 12, 20 ) != 'centered' ) e.html( '<div class="centered">' + c + '</div>' );
}

// Change the width of an element to window width
function fullWidth( e ) {
	e.width( docu_w );
}

function showURLField() {
	if ( totCnt ) $( '#company_website' ).addClass( 'error' );
	$( '#company-url' ).removeClass( 'hiding' );
	updateScrollEffects();
}

function hideURLField() {
	$( '#company_website' ).removeClass( 'error' );
	$( '#company_website' ).val( '' );
	$( '#company-url' ).addClass( 'hiding' );
	updateScrollEffects();
}

function countCharacters() {
	$( '#chars-counter' ).html( ( 3000 - $( '#comment' ).val().length ) + '/3000' );
}

function updateScrollEffects() {
	updateSideMenu();
	updateSideMenuPosition();
	resetTopElementsPositions();
}

function updateInPageMenu() {
	if ( side_m ) {
		$.each( side_a, function( i, v ) {
			if ( $( '#main-article a[name=' + v + ']' ).length ) {
				if ( !$( '#main-article a[name=' + v + ']' ).is( ':visible' ) ) $( '#in-page-nav #' + v ).parent().hide();
				else $( '#in-page-nav #' + v ).parent().show();
			}
		} );
	}
}

function firstLetterToUpperCase( s ) {
	return s.charAt(0).toUpperCase() + s.substring(1);
}
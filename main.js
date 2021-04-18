var exos=[
  "Ecrire un programme qui demande une durée en secondes et l'affiche enheurs, minutes et secondes .",
  "Ecrire un programme qui demande à l'utilisateur deux entiers de type int et les affiche dans l'ordre croissant.",
  "Ecrire un programme qui demande à l'utilisateur une année (2016 par exemple) et indique si celle-ci est bissextile. Une année est bissextile si le nombre est divisible par 4 et pas par 100 ou divisible par 400. par exemple l'année 1900 n'est pas divisible par 400. Elle est divisible par 4 et par 100 donc elle n'est pas bissextile. ",
  "Ecrire un programme qui demande à l'utilisateur deux réels de type double puis un caractère correspndant à l'opération à effectuer (+; -; *; /) et affiche l'oppération ainsi que le résultat. par exemple, 2*3=6 .",
  "Ecrire un programme qui demande un entier entre 1 et 12 et affiche le mois de l'année correspondant . Par exemple, si l'utilisateur saisit l'entier 3, le programme affiche &lt;&lt;mars&gt;&gt;.",
  "Ecrire un programme calculant la somme des entiers de 1 à 50" ,
  "Ecrire un programme qui affiche les carrées des entiers de 1 à 10",
  "Ecrire un programme qui calcule la somme de tous les nombres entiers positifs pairs inferieur à 50 .",
  "Ecrire un programme qui affiche tous les diviseur d'un entier n qui sera saisi au clavier .",
  "Ecrire un programme qui calcule la somme des n premiers termes de la serie hormonique, c'est-à-dire la somme : 1+1/2+1/3+1/4+.....+1/n. L'entier n demandé à l'tilisateur .",
  "Ecrire un programme qui demande à l'utilisateur de saisir un entier n, puis affiche tous les entiers paires entre 1 et n. Par exemple si n=9, le programme affiche 2, 4, 6, 8"],

  rep=[
   '#include&ltstdio.h><br> int main() { <br> int d,h,m,s,r; <br> printf("Entrer un durée en seconde :\\n"); <br> scanf("%d",&d); <br>h=d/3600;r=d%3600;<br>m=r/60;<br>s=r%60;<br>printf("%d est composé de %d heures, %d minutes et %d secondes:\\n",d,h,m,s);<br> return 0;<br> }',
   '#include&lt;stdio.h&gt;<br>int main() {<br>int a,b;<br>printf("Entrer le prémiére nombre:\\n");<br>scanf("%d",&amp;a);<br>printf("Entrer le deuxiéme nombre:\\n");<br>scanf("%d",&amp;b);<br>if(a&lt;b)<br>printf("L\'ordre croissant est respectivement : %d\\t%d",a,b);<br>else if(b&lt;a)<br>printf("L\'ordre croissant est respectivement :%d\\t%d",b,a);<br>else<br>printf("Les entiers entrés sont égeaux \\n");<br>return 0;<br>}',
   '#include&lt;stdio.h&gt;<br>int main() { <br> int n;<br> pritf("Entrer une annee souhaitant savoire si elle est bissextile :\\n");<br>scanf("%d",&amp;n);<br>if(((n%4==0)&amp;&amp;(n%100!=0))||(n%400==0))<br>printf("L\'année %d est bissextile \\n",n);<br>else<br>printf("L\'année %d n\'est pas bissextile",n);<br>return 0;<br> }',
   '#include&lt;stdio.h&gt;<br>int main() {<br>double a,b;<br>char c;<br>printf("Entrer un caractère :\\n");<br>scanf("%c",&c);<br>printf("Entrer deux nombre :\\n");<br>scanf("%lf%lf",&a,&b);<br>switch(c){<br>case\'+\': printf("%lf+%lf=%lf",a,b,a+b); break;<br>case\'-\' : printf("%lf-%lf=%lf",a,b,a-b); break;<br>case\'*\': printf("%lf*%lf=%lf",a,b,a*b); break;<br>case\'/\': { if(b==0)<br>printf("impossible");<br>else printf("%lf/%lf=%lf",a,b,a/b); break;<br>default : printf("n\'est pas defini"); <br>} <br>}return 0; <br>}',
   '#include&lt;stdio.h&gt;<br>int main() {<br>int n;<br>printf("Entrer un nombre entre 1 et 12 :\\n");<br>scanf("%d",&n);<br>switch(n) {<br>case 1: printf("janvier \\n"); break;<br>case 2: printf("Fevrier \\n"); break ;<br>case 3: printf("Mars \\n"); break ;<br>case 4: printf("Avril \\n"); break ;<br>case 5: printf("Mais \\n"); break ;<br>case 6: printf("Juin \\n"); break ;<br>case 7: printf("Juillet \\n"); break ;<br>case 8: printf("Aout \\n"); break ;<br> case 9: printf("Septembre \\n"); break ;<br>case 10: printf("Octobre \\n"); break ;<br>case 11: printf("Nouvembre \\n"); break ;<br>case 12: printf("Decembre \\n"); break ;<br>default : printf("n\'est pas defini  \\n");<br>}<br>return 0;<br>}',
  ]

for (var i = 0; i < exos.length; i++)  {
      n=i+1; 
	$(".container").html($(".container").html()+
		'<div class="card" style="width: 30rem;margin: 2rem auto;"><div class="card-header">'+
    '<div class="n"></div><p>'+n+'</p><button class="btn btn-success e" n='+i+'>L\'exercice </button>'+
	'<button class="btn btn-primary r" n='+i+'>Reponse</button>'+
	'<button class="btn btn-primary c" n='+i+'>Execution</button></div>'+
   '<div class="card-body"> <blockquote class="blockquote mb-0"><p>'+
    exos[i]+'</p></blockquote></div></div>');

}
for (var i = 0; i < 9; i++) $(".n").next()[i].style.marginLeft='27rem';

$('.r').click(function() {
	 var n=parseInt($(this).attr("n"));

	$(this).parent().next().slideUp(600);
	$(this).parent().next().slideDown(600);
	$(this).parent().next().children().children().html('<code>'+rep[n]+'</code>');
	$(this).parent().next().children().children().css('text-align','initial');
	$(this).parent().next().attr('class','card-body bg-dark');
	// console.log($(this));

	$(this).attr("class","btn btn-success r");
	$(this).prev().attr("class","btn btn-primary e");
	$(this).next().attr("class","btn btn-primary c");
});

$(".e").click(function() {
	 var n=parseInt($(this).attr("n"));
	 $(this).parent().next().slideUp(600);
	$(this).parent().next().slideDown(600);
     $(this).parent().next().children().children().html(exos[n]);
	$(this).parent().next().children().children().css('text-align','center');
	$(this).parent().next().attr('class','card-body');


	$(this).attr("class","btn btn-success e");
	$(this).next().next().attr("class","btn btn-primary r");
	$(this).next().attr("class","btn btn-primary c");
});
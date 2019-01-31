open( SF, "< Surge.md" );
while( <SF> )
{
	s/\.svm/\.png/;
	print;
}
